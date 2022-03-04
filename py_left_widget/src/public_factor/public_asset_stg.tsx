//import { Panel, Widget } from '@lumino/widgets';
//import {JupyterFrontEnd} from '@jupyterlab/application';
import React from 'react';
import { ReactWidget } from '@jupyterlab/apputils';
//import axios from 'axios';
//import { NotebookPanel } from '@jupyterlab/notebook';
import {Dialog, showDialog} from "@jupyterlab/apputils";
import {JupyterFrontEnd} from '@jupyterlab/application';
import { NotebookActions,NotebookPanel} from '@jupyterlab/notebook';
import analysis_code from './factor_analysis.json';
import backtest_code from './factor_backtest.json';
import prehandle_code from './factor_prehandle.json';
import { factor_prehandle_Widget, 
	     factor_backtest_Widget, 
		 factor_analysis_Widget } from './factor_widgets';
//import $ from 'jquery';
//import * as sample_nb2 from '../../command_work_file/sample_nb2.json';
//declare var $: any;
//INotebookTracker,
//import txt from 'raw-loader';
//const file_path2 = '';
const file_path = 'extension_dir/py_left_widget/command_work_file/';
//打开新的选项界面,预处理,因子分析,回测,试验 html写法
const factor_name = '总资产短期（1年）历史增长率';
//const generalDialogWidget = document.createElement("div");

/*
async function newCustomFromString(nbName: string, cwd?: string, kernelName?: string): Promise<NotebookPanel> {
	const nbText = await import("!!raw-loader!./custom-notebook.ipynb");
	const nbPanel: NotebookPanel = await app.commands.execute(
	  'notebook:create-new', 
	  {cwd, kernelName}
	);
	await nbPanel.context.ready;
	await nbPanel.context.rename(nbName);
	nbPanel.context.model.fromString(nbText);
	return nbPanel;
  }
*/

//document.querySelector('#is_winsorize')


/**
 * React component for a counter.
 *
 * @returns The React component
 */

/*
const CounterComponent = (): JSX.Element => {
  //const [counter, setCounter] = useState(0);

};
*/

/*<p> You clicked {counter} times! </p> 
      <button
        onClick={(): void => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
	*/

/**
 * A Counter Lumino Widget that wraps a CounterComponent.
 */
export class CounterWidget extends ReactWidget {
  app_n: any;
  /**
   * Constructs a new CounterWidget.
   */
  constructor(app: JupyterFrontEnd) {
    super();
    this.addClass('jp-ReactWidget');
	this.app_n = app;
  }

  render(): JSX.Element {
    return (
		<div className="fctContainer">
			<div className="fctContentCon">
				<div className="fctDesCon">
					<section className="--jp-factor-header">
						<p className="--jp-factor-title">
							<span className="factor_name">公共因子：总资产短期（1年）历史增长率（asset_stg）</span>
							{/*<span className="storage_type">实时计算</span>*/}
						</p>
						<p className="fct_info_item factor_type">
							<span className="fct_info_label">因子类型：</span>
							<span className="fct_info_value">Growth</span>
						</p>
						<p className="fct_info_item">
							<span className="fct_info_label">因子描述：</span>
							<span className="fct_info_value">总资产短期（1年）历史增长率</span>
						</p>
						<p className="fct_info_item">
							<span className="fct_info_label">计算方法：</span>
							<span className="fct_info_value">总资产短期（1年）历史增长率 =（最近1期年报总资产-上上期年报总资产）/ABS（上上期年报总资产）*100%。</span>
						</p>
					</section>
				</div>
				<div className="factorHandlerBar">
					<div className="inner_wrapper">
						<div className="fcthandlerItem factor_pretreat"
							onClick = {async()=>{
								const result = await showDialog({
									body: new factor_prehandle_Widget(factor_name),
									buttons: [Dialog.cancelButton({label: "取消"}), Dialog.okButton({label: "开始运行"})],
									focusNodeSelector: "input",
									title: "因子预处理",
								  });
								  
								  if (result.button.label === "开始运行") {
									const {commands} = this.app_n;
									  //const temp = await commands.execute('docmanager:open',{
										//  path: file_path+'test_py.ipynb',
										//  factory:"Notebook",
									  //});
										//const nbText = await import("!!raw-loader! ./extension_dir/py_left_widget/command_work_file/custom-notebook.ipynb");
										//const a = await require("file_path+response.data.ipyname");
										//console.log(a);
									const nb_para = result.value as object;
									const keys = Object.keys(nb_para);
									let new_source:string[]=[];
									for(let i=0;i<keys.length;i++){
										let key = keys[i]
										let value = nb_para[key]
										if(typeof value === "string"){
											value = "'"+value+"'";
										}
										const newline:string = key+'='+value+'\n'; 
										new_source.push(newline);
									}
									prehandle_code.cells[0].source=new_source;
									console.log(new_source);
									const getnb = async()=>{
										const nbPanel: NotebookPanel = await commands.execute(
											'notebook:create-new', 
											//{cwd:file_path,kernelName:'Python 3'}
											{cwd:file_path}
											);
										await nbPanel.context.ready;
										const new_name = nb_para['new_name']+'.ipynb';
										await nbPanel.context.rename(new_name);
										nbPanel.context.model.fromString(JSON.stringify(prehandle_code));
										return nbPanel;
									};
									const nbPanel = await getnb();
									function runall(){
										NotebookActions.runAll(nbPanel.content,nbPanel.context.sessionContext)
									}
									setTimeout(runall,5000);
										//await $.getJSON (file_path+"sample_nb2.json", function(data){
										//	console.log(data);
										//	
										//});
										//console.log(jsonData)
										//await NotebookActions.replaceSelection(nbPanel.content, "print('helloworld')");
									
									  }
									 
							}}
						>
							<div className="item_inner_wrapper">
								<div className="item_left">
									<span className="factor_pretreat_item_icon"></span>
								</div>
								<div className="item_right">
									<p className="item_name">因子预处理</p>
									<p className="item_des">对因子数据进行中性化、去极值等处理，并生成新的因子</p>
								</div>
							</div>
						</div>
						<div className="fcthandlerItem factor_analy"
							onClick = {async()=>{
								const result = await showDialog({
									body: new factor_analysis_Widget(factor_name),
									buttons: [Dialog.cancelButton({label: "取消"}), Dialog.okButton({label: "开始运行"})],
									focusNodeSelector: "input",
									title: "因子分析",
								  });
								  
								  if (result.button.label === "开始运行") {
									const {commands} = this.app_n;
									  //const temp = await commands.execute('docmanager:open',{
										//  path: file_path+'test_py.ipynb',
										//  factory:"Notebook",
									  //});
										//const nbText = await import("!!raw-loader! ./extension_dir/py_left_widget/command_work_file/custom-notebook.ipynb");
										//const a = await require("file_path+response.data.ipyname");
										//console.log(a);
									const nb_para = result.value as object;
									const keys = Object.keys(nb_para);
									let new_source:string[]=[];
									for(let i=0;i<keys.length;i++){
										let key = keys[i]
										let value = nb_para[key]
										if(typeof value === "string"){
											value = "'"+value+"'";
										}
										const newline:string = key+'='+value+'\n'; 
										new_source.push(newline);
									}
									analysis_code.cells[0].source=new_source;
									console.log(new_source);
									const getnb = async()=>{
										const nbPanel: NotebookPanel = await commands.execute(
											'notebook:create-new', 
											//{cwd:file_path,kernelName:'Python 3'}
											{cwd:file_path}
											);
										await nbPanel.context.ready;
										const new_name = factor_name+'_因子分析.ipynb';
										await nbPanel.context.rename(new_name);
										nbPanel.context.model.fromString(JSON.stringify(analysis_code));
										return nbPanel;
									};
									const nbPanel = await getnb();
									function runall(){
										NotebookActions.runAll(nbPanel.content,nbPanel.context.sessionContext)
									}
									setTimeout(runall,5000);
										//await $.getJSON (file_path+"sample_nb2.json", function(data){
										//	console.log(data);
										//	
										//});
										//console.log(jsonData)
										//await NotebookActions.replaceSelection(nbPanel.content, "print('helloworld')");
									
									  }
									 
							}}
						>
							<div className="item_inner_wrapper">
								<div className="item_left">
									<span className="factor_analy_item_icon"></span>
								</div>
								<div className="item_right">
									<p className="item_name">因子分析</p>
									<p className="item_des">分析因子在多个纬度下的有效性表现，了解因子在不同行业的适用性</p>
								</div>
							</div>
						</div>
						<div className="fcthandlerItem group_backtest"
							onClick = {async()=>{
								const result = await showDialog({
									body: new factor_backtest_Widget(factor_name),
									buttons: [Dialog.cancelButton({label: "取消"}), Dialog.okButton({label: "开始运行"})],
									focusNodeSelector: "input",
									title: "分组回测",
								  });
								  
								  if (result.button.label === "开始运行") {
									const {commands} = this.app_n;
									  //const temp = await commands.execute('docmanager:open',{
										//  path: file_path+'test_py.ipynb',
										//  factory:"Notebook",
									  //});
										//const nbText = await import("!!raw-loader! ./extension_dir/py_left_widget/command_work_file/custom-notebook.ipynb");
										//const a = await require("file_path+response.data.ipyname");
										//console.log(a);
									const nb_para = result.value as object;
									const keys = Object.keys(nb_para);
									let new_source:string[]=[];
									for(let i=0;i<keys.length;i++){
										let key = keys[i]
										let value = nb_para[key]
										if(typeof value === "string"){
											value = "'"+value+"'";
										}
										const newline:string = key+'='+value+'\n'; 
										new_source.push(newline);
									}
									backtest_code.cells[0].source=new_source;
									console.log(new_source);
									const getnb = async()=>{
										const nbPanel: NotebookPanel = await commands.execute(
											'notebook:create-new', 
											//{cwd:file_path,kernelName:'Python 3'}
											{cwd:file_path}
											);
										await nbPanel.context.ready;
										const new_name = factor_name+'_分组回测.ipynb';
										await nbPanel.context.rename(new_name);
										nbPanel.context.model.fromString(JSON.stringify(backtest_code));
										return nbPanel;
									};
									const nbPanel = await getnb();
									function runall(){
										NotebookActions.runAll(nbPanel.content,nbPanel.context.sessionContext)
									}
									setTimeout(runall,5000);
										//await $.getJSON (file_path+"sample_nb2.json", function(data){
										//	console.log(data);
										//	
										//});
										//console.log(jsonData)
										//await NotebookActions.replaceSelection(nbPanel.content, "print('helloworld')");
									
									  }
									 
							}}
						>
							<div className="item_inner_wrapper">
								<div className="item_left">
									<span className="group_backtest_item_icon"></span>
								</div>
								<div className="item_right">
									<p className="item_name">分组回测</p>
									<p className="item_des">对因子进行分组回测，更精细地分析因子在历史行情中的表现</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*
				<div className="historyContainer">
					<p>
						<span className="historyTitle">历史分析</span>
						<span title="刷新列表" className="refresh_btn jp-RefreshIcon"></span>
					</p>
					<p className="dataContainer">
						<table>
							<thead>
								<tr>
									<th>名称</th>
									<th>创建时间</th>
									<th>操作</th>
								</tr>
							</thead>
							<tbody>
								<tr className="analyNode_amplitude_因子分析_1.ipynb">
									<td className="analy_result_name">amplitude_因子分析_1.ipynb</td>
									<td>2019-04-28 10:11:28</td>
									<td>
										<span className="delAnalyBtn" >删除</span>
									</td>
								</tr>
								<tr className="analyNode_amplitude_分组回测_1.ipynb">
									<td className="analy_result_name">amplitude_分组回测_1.ipynb</td>
									<td>2021-07-22 17:04:41</td>
									<td>
										<span className="delAnalyBtn">删除</span>
									</td>
								</tr>
								<tr className="analyNode_amplitude_因子分析_2.ipynb">
									<td className="analy_result_name">amplitude_因子分析_2.ipynb</td>
									<td>2021-09-30 11:38:09</td>
									<td>
										<span className="delAnalyBtn">删除</span>
									</td>
								</tr>
								<tr className="analyNode_amplitude_因子分析_3.ipynb">
									<td className="analy_result_name">amplitude_因子分析_3.ipynb</td>
									<td>2022-01-27 15:36:56</td>
									<td>
										<span className="delAnalyBtn">删除</span>
									</td>
								</tr>
							</tbody>
						</table>
					</p>
				</div>
				*/}
				<div className="fctQueryCon">
					<p className="queryTitle">因子查询：</p>
					<p className="nullText">该因子为实时计算因子，暂时无法查看数据。</p>
				</div>
			</div>
		</div>
	  );
  }
}




