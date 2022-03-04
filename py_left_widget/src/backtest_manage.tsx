import {JupyterFrontEnd} from '@jupyterlab/application';
//import { notebookIcon } from '@jupyterlab/ui-components';
//import { CommandPalette } from '@lumino/widgets';
import React from 'react';
import { NotebookActions,NotebookPanel} from '@jupyterlab/notebook';
import { MainAreaWidget,ReactWidget } from '@jupyterlab/apputils';
import jsonData from './create_bt_custom.json'
const file_path = 'extension_dir/py_left_widget/command_work_file/';
class create_bt_widget extends ReactWidget {
	app_n: any;
	constructor(app: JupyterFrontEnd) {
		super();
		this.addClass('jp-ReactWidget');
		this.app_n = app;
    this.id='create-backtest-panel';
  }

	render(): JSX.Element {
		return (
		  <div className="btParamContainer">
        <div className="bt-header">
          <div className="bt-param-btname">
              <input className="bt-param-value" placeholder='新回测1' defaultValue='新回测1' id='backtest_name'></input>
              <span className="name-icon"></span>
          </div>
        </div>
        <div className="bt-tickerfilter bt-section">
          <div className="bt-section-header">
            <span>选股条件</span>
          </div>
          <div className="bt-section-content">
            <div className="row">
              <div className="bt-param bt-param-tkScope bt-param-self-selector">
                  <span className="bt-param-name">股票池</span>
                  <select className="bt-param-value" id='stock_pool'>
                      <option value="A">全A股</option>
                      <option value="000905.SH">中证500</option>
                      <option value="000300.SH">沪深300</option>
                      <option value="000016.SH">上证50</option>
                      <option value="000001.SH">上证指数</option>
                  </select>
              </div>
              <p className="bt-param bt-param-limitDown">
                <span className="bt-param-name">过滤跌停</span>
                <select className="bt-param-value" id='filter_limitDown'>
                  <option value="True">是</option>
                  <option value="False">否</option>
                </select>
              </p>
              <p className="bt-param bt-param-st">
                  <span className="bt-param-name">过滤ST</span>
                  <select className="bt-param-value" id='filter_st'>
                      <option value="True">是</option>
                      <option value="False">否</option>
                  </select>
              </p>
            </div>  
            <div className="row">
              <p className="bt-param bt-param-neutral">
                <span className="bt-param-name">行业中性</span>
                <select className="bt-param-value" id='filter_neutral'>
                  <option value="False">否</option>
                  <option value="True">是</option>
                </select>
              </p>
              <div className="bt-param bt-param-timeperiod bt-param-self-selector">
                <span className="bt-param-name">剔除新股</span>
                <select className="bt-param-value" id='filter_timeperiod'>
                  <option value="False">否</option>
                  <option value="60">是</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="bt-backtestfilter bt-section">
          <div className="bt-section-header">
              <span>回测条件</span>
          </div>
          <div className="bt-section-content">
            <div className="row">          
              <div className="bt-param bt-param-benchmark bt-param-self-selector">
                <span className="bt-param-name">参考基准</span>
                <select className="bt-param-value" id='benchmark'>
                  <option value="000905.SH">中证500</option>
                  <option value="000300.SH">沪深300</option>
                  <option value="000016.SH">上证50</option>
                  <option value="000001.SH">上证指数</option>
                </select>
              </div>
              <p className="bt-param bt-param-frequency">
                <span className="bt-param-name">调仓周期</span>
                <select className="bt-param-value" id='frequency'>
                  <option value="month_end">每月</option>
                  <option value="week_end">每周</option>
                  <option value="daily">每日</option>
                </select>
              </p>
              <p className="bt-param bt-param-holdingcount">
                <span className="bt-param-name">持股数</span>
                <input className="bt-param-value" type="number" defaultValue="200" placeholder="200" id='holdingcount'></input>
              </p>
              <p className="bt-param bt-param-tradeCost">
                <span className="bt-param-name">交易费率</span>
                <input className="bt-param-value" type="number" defaultValue="0.0001" placeholder="0.0001" id='tradeCost'></input>
              </p>
            </div>
          </div>
        </div>
        <div className="bt-footer" style={{position: 'sticky', visibility: 'visible'}}>
          <div className="run-btn-group pull-right">
            {/*<span className="bt-run-terminal">后台运行</span>*/}
            <span className="bt-run-notebook"
              onClick = {async()=>{
                let nb_para = {
                  backtest_name:(document.querySelectorAll('#backtest_name')[0] as HTMLInputElement).value,
                  stock_pool:(document.querySelectorAll('#stock_pool')[0] as HTMLSelectElement).value,
                  filter_limitDown:(document.querySelectorAll('#filter_limitDown')[0] as HTMLSelectElement).value,
                  filter_st:(document.querySelectorAll('#filter_st')[0] as HTMLSelectElement).value,
                  filter_neutral:(document.querySelectorAll('#filter_neutral')[0] as HTMLSelectElement).value,
                  filter_timeperiod:(document.querySelectorAll('#filter_timeperiod')[0] as HTMLSelectElement).value,
                  benchmark:(document.querySelectorAll('#benchmark')[0] as HTMLSelectElement).value,
                  frequency:(document.querySelectorAll('#frequency')[0] as HTMLSelectElement).value,
                  holdingcount:(document.querySelectorAll('#holdingcount')[0] as HTMLInputElement).valueAsNumber,
                  tradeCost:(document.querySelectorAll('#tradeCost')[0] as HTMLInputElement).valueAsNumber,
                  datefrom:(document.querySelectorAll('#datefrom')[0] as HTMLInputElement).value,
                  dateto:(document.querySelectorAll('#dateto')[0] as HTMLInputElement).value,
                }
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
                    jsonData.cells[0].source=new_source;
                    const {commands} = this.app_n;
                    const getnb = async()=>{
											const nbPanel: NotebookPanel = await commands.execute(
												'notebook:create-new', 
												{cwd:file_path}
												);
											await nbPanel.context.ready;
                      const file_name = nb_para.backtest_name+'.ipynb';
											await nbPanel.context.rename(file_name);
											nbPanel.context.model.fromString(JSON.stringify(jsonData));
											return nbPanel;
										};
										const nbPanel = await getnb();
										function runall(){
											NotebookActions.runAll(nbPanel.content,nbPanel.context.sessionContext)
										}
										setTimeout(runall,5000);
              }}
            >运行回测</span>
          </div>
          <div className="bt-param-date bt-param pull-right">
            <p className="bt-param-datefrom">
              <input type="date" className="bt-param-value from-date" id='datefrom'></input>          
            </p>
            <span> - </span>
            <p className="bt-param-dateto">
              <input type="date" className="bt-param-value to-date" id='dateto'></input>
            </p>
          </div>
        </div>
      </div>





    )
    }
  }

export class wgt_backtest_manage extends ReactWidget {
  main_app:any
  constructor(app: JupyterFrontEnd) {
    super();
    this.id = 'backtest_manage-sidebar';
    this.title.caption = '回测管理';
	  this.title.label = '回测管理';
    this.addClass("p-Widget");
    this.addClass("risk-performance-sidebar");
    this.main_app=app;
  }
  render(): JSX.Element {
    return (
        <div className="risk-performace-sidebar-container">
          <div className="dw-sidebar-header">
            <span>回测管理</span>
            <span className="refresh_btn jp-RefreshIcon"></span>
            <span className="dw-sidebar-add-btn"
              onClick = {()=>{
                const content = new create_bt_widget(this.main_app);
                const widget = new MainAreaWidget<create_bt_widget>({ content });
                widget.title.label = '新建回测';
                this.main_app.shell.add(widget, 'main');
              }
            }
            >新建回测</span>
          </div>
          <ul className="--jp-Backtest-list">
            <li className="--jp-Backtest-Item" 
              onClick = {()=>{
                  this.main_app.commands.execute('docmanager:open', {
                  path: file_path+'自定义回测模板_1.ipynb',
                  factory: 'Notebook',
                });
              }}
            >
              <span className="--jp-BacktestIcon jp-NotebookIcon"></span>
              <span className="--jp-BacktestText">自定义回测模板_1.ipynb</span>
            </li>
            <li className="--jp-Backtest-Item" 
              onClick = {()=>{
                  this.main_app.commands.execute('docmanager:open', {
                  path: file_path+'逐bar回测模板_1.ipynb',
                  factory: 'Notebook',
                });
              }}
            >
              <span className="--jp-BacktestIcon jp-NotebookIcon"></span>
              <span className="--jp-BacktestText">逐bar回测模板_1.ipynb</span>
            </li>
            <li className="--jp-Backtest-Item" 
              onClick = {()=>{
                  this.main_app.commands.execute('docmanager:open', {
                  path: file_path+'回测_1.ipynb',
                  factory: 'Notebook',
                });
              }}
            >
              <span className="--jp-BacktestIcon jp-NotebookIcon"></span>
              <span className="--jp-BacktestText">回测_1.ipynb</span>
            </li>
          </ul>
        </div>
    )
  }
}