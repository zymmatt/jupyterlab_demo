import {JupyterFrontEnd} from '@jupyterlab/application';
//import { notebookIcon } from '@jupyterlab/ui-components';
//import { CommandPalette } from '@lumino/widgets';
import React from 'react';
import { MainAreaWidget,ReactWidget } from '@jupyterlab/apputils';
import Demo from './upload_btn';

const file_path = 'extension_dir/py_left_widget/command_work_file/';
class rp_widget extends ReactWidget {
	app_n: any;
	chart1_option: any;
	constructor(app: JupyterFrontEnd) {
		super();
		this.addClass('jp-ReactWidget');
		this.app_n = app;
    this.id='create-riskperformance-panel';
	}

	render(): JSX.Element {
		return (
		  <div className="create_portfolio_container">
        <div className="header">
          <div className="dw-title-lv2">创建组合</div>
        </div>
        <div id = "risk_performance_content" className="content">
          <div className="portfolio_info">
            <div className="portfolio_name">
              <span className="label">组合名称</span>
              <input type="text" className="input dw-plain-input portfolio_name_input" ></input>
            </div>
            <div className="portfolio_benchmark">
              <span className="name">参考基准</span>
              <input type="text" className="input dw-plain-input portfolio_name_input" placeholder='请输入基准指数代码'></input>
              {/*
              <div className="ant-select-show-search ant-select-auto-complete ant-select ant-select-combobox ant-select-enabled" style={{width: "200px"}}>
                <div className="ant-select-selection ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                  <div className="ant-select-selection__rendered">
                    <div unselectable="on" className="ant-select-selection__placeholder" >请输入基准指数代码</div>
                    <ul>
                      <li className="ant-select-search ant-select-search--inline">
                        <div className="ant-select-search__field__wrap">
                          <input type="text" className="ant-input ant-select-search__field" value=""></input>
                          <span className="ant-select-search__field__mirror">&nbsp;</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              */}

            </div>
          </div>
          <div className="upload_file_con">
            <p>上传持仓文件：</p>
            <p>
              {/*<input id="csv_input" type="file" accept=".csv"></input>*/}
              <Demo></Demo>
            </p>
          </div>
        </div>

        {/*
        <div className="upload-box ant-upload ant-upload-drag" style={{padding: "15px"}}>
          <div>
            <p className="ant-upload-drag-icon">
              <i className="anticon anticon-file-text">
                <svg viewBox="64 64 896 896" className="" data-icon="file-text" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                  <path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"></path>
                </svg>
              </i>
            </p>
            <p className="ant-upload-text">点击此处上传交易清单</p>
            <p className="ant-upload-hint">支持单个csv文件上传，文件内容格式请参照<a className="demo-text" download="true">持仓清单Demo.csv</a></p>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="ant-btn ant-btn-primary" style={{float: "right", width: "140px"}}>
            <span>开始分析</span>
          </button>
        </div>
        */}
      </div>





    )
    }
  }

export class wgt_risk_performance extends ReactWidget {
	
	main_app:any
  constructor(app: JupyterFrontEnd) {
    super();

    this.id = 'risk-performance-sidebar';
    this.title.caption = '风险绩效';
	  this.title.label = '风险绩效';
    this.addClass("p-Widget");
    this.addClass("risk-performance-sidebar");
    this.main_app=app;
  }
  render(): JSX.Element {
    return (
        <div className="risk-performace-sidebar-container">
          <div className="dw-sidebar-header">
            <span>风险绩效分析</span>
            <span className="refresh_btn jp-RefreshIcon"></span>
            <span className="dw-sidebar-add-btn"
              onClick = {()=>{
                const content = new rp_widget(this.main_app);
                const widget = new MainAreaWidget<rp_widget>({ content });
                widget.title.label = '新建组合';
                this.main_app.shell.add(widget, 'main');
              }
            }
            >创建组合</span>
          </div>
          <div className="risk-performace-list">
            <li className="risk-performace-Item" 
              onClick = {()=>{
                  this.main_app.commands.execute('docmanager:open', {
                  path: file_path+'Basic_and_VaR.ipynb',
                  factory: 'Notebook',
                });
              }}
            >
              <span className="--jp-BacktestIcon jp-NotebookIcon"></span>
              <span className="--jp-BacktestText">Basic_and_VaR.ipynb</span>
            </li>
            
          </div>
        </div>
    )
  }
}