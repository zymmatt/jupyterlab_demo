import {JupyterFrontEnd} from '@jupyterlab/application';
import { MainAreaWidget,ReactWidget } from '@jupyterlab/apputils';
//import { CommandPalette } from '@lumino/widgets';
import axios from 'axios';
//import { Panel } from '@lumino/widgets';
import React  from 'react';
//{ ReactElement }
//import { ToolbarButton, Toolbar } from '@jupyterlab/apputils';
//const file_path = 'extension_dir/py_left_widget/command_work_file/';
import Test from './close_table'
//import { refreshIcon } from '@jupyterlab/ui-components';

export class wgt_stock_risk extends ReactWidget {
	main_app:any
  table_ret:any
  constructor(app: JupyterFrontEnd) {
    super();
    this.main_app=app;
	  this.id = 'leftwidget_stock_risk';
    this.title.caption = '个股风险';
	  this.title.label = '个股风险';
    this.addClass('left_widget_stock_risk');
  }
    // Add our own refresh button, since the other one is hidden
    // via CSS.
    /*
	const leftwidget_stock_risk_tb = new Toolbar();
    const refresher = new ToolbarButton({
      icon: refreshIcon,
	  //label: '风险观察池',
      onClick: () => {
        //this.model.refresh();
      },
      tooltip: 'Refresh File List'
    });
  */

    //refresher.addClass('jp-GitHub-toolbar-item');
	//this.toolbar.addItem('gh-refresher', refresher);
	//leftwidget_stock_risk_tb.addItem('gh-refresher', refresher);
	//this.addWidget(leftwidget_stock_risk_tb);

  render(): JSX.Element {
    return (
      <div className="watchList-container">
        <div className="watchList-searchBar">
          <div className="ant-select-show-search ant-select-auto-complete ant-select ant-select-combobox ant-select-enabled" style={{width: '100%'}}>
            <div className="ant-select-selection ant-select-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
              <div className="ant-select-selection__rendered">
                <ul>
                  <li className="ant-select-search ant-select-search--inline">
                    <div className="ant-select-search__field__wrap">
                      <input type="text" className="ant-input ant-select-search__field" placeholder='输入股票代码或名称添加股票'
                      onKeyPress={(event)=>{
                        if (event.code==='Enter') {
                          // 在输入框回车即是搜索
                          alert("回车");
                          var newele= <div>asdfasdf </div>
                          const cc:any = document.getElementById('asdf')
                          cc.removeChild(newele);
                        }
                      }}></input>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="stock-watchlist-panel">
          <div className="dw-li-item"  id='SHSE.600000'>
            <div className="dw-li-item-text">浦发银行 (600000.SH)</div>
            <div className="dw-close-btn"
            onClick = {(e)=>{
                  const cur_div:any = e.currentTarget.parentElement;
                  const parent:any = cur_div.parentElement;
                  parent.removeChild(cur_div);
                }
              }></div>
          </div>
          <div className="dw-li-item" id='000002'>
            <div className="dw-li-item-text">万  科Ａ (000002.SZ)</div>
            <div className="dw-close-btn"
            onClick = {(e)=>{
                  const cur_div:any = e.currentTarget.parentElement;
                  const parent:any = cur_div.parentElement;
                  parent.removeChild(cur_div);
                }
              }></div>
          </div>

          {/*<div className="dw-li-item activate"> */}
          <div className="dw-li-item" id='600519'>
            <div className="dw-li-item-text">贵州茅台 (600519.SH)</div>
            <div className="dw-close-btn"
              onClick = {(e)=>{
                const cur_div:any = e.currentTarget.parentElement;
                const parent:any = cur_div.parentElement;
                parent.removeChild(cur_div);
                }
              }>
            </div>
          </div>
          <div className="dw-li-item" id='600009'>
            <div className="dw-li-item-text"
              onClick = {()=>{
                const stock_id = 'SHSE.600009';
                const label = '上海机场';
                //const stock_name = '上海机场';
                //let return_data;
                const post_data = {
                  stock_id:stock_id
                }
                const main_app = this.main_app;
                axios({
                  method: 'post',
                  url: 'http://192.168.211.56:5000/stock_risk',
                  data: post_data
                }).then(function (response) {
                  console.log(response.data.data);
                  const content = new stock_Widget(main_app, stock_id, response.data.data);
                  const widget = new MainAreaWidget<stock_Widget>({ content });
                  widget.title.label = label;
                  main_app.shell.add(widget, 'main');
                  //const return_data = response.data;
               
                  //const parent_div:any = document.getElementById("risk_card_container_600009");
               
                  
                  //const output = document.createElement("div")
                  //const staticElement = renderToStaticMarkup(child_div as ReactElement)
                  //output.innerHTML = `<div>${staticElement}</div>`
                  //parent_div.appendChild(child_div);
                }).catch(function (error) {
                  console.log(error);

                })
                
              }
            }>上海机场 (600009.SH)</div>
            <div className="dw-close-btn"
              onClick = {(e)=>{
                const cur_div:any = e.currentTarget.parentElement;
                const parent:any = cur_div.parentElement;
                parent.removeChild(cur_div);
                }
              }>

            </div>
          </div>
          <div className="dw-li-item" id='600004'>
            <div className="dw-li-item-text">白云机场 (600004.SH)</div>
            <div className="dw-close-btn"
              onClick = {(e)=>{
                const cur_div:any = e.currentTarget.parentElement;
                const parent:any = cur_div.parentElement;
                parent.removeChild(cur_div);
                }
              }>
            </div>
          </div>
          <div className="dw-li-item" id='600398'>
            <div className="dw-li-item-text">海澜之家 (600398.SH)</div>
            <div className="dw-close-btn"
              onClick = {(e)=>{
                const cur_div:any = e.currentTarget.parentElement;
                const parent:any = cur_div.parentElement;
                parent.removeChild(cur_div);
                }
              }>
            </div>
          </div>
        </div>
      </div>
    )
  }
	
  
}



class stock_Widget extends ReactWidget {
	app_main: any;
  stock_id: string;
	table_data: any;
	constructor(app: JupyterFrontEnd, stock_id:string, table_data:any) {
		super();
		this.addClass('jp-ReactWidget');
		this.app_main = app;
    this.stock_id = stock_id;
    this.table_data = table_data;
  }
	render(): JSX.Element {

		return (
		<div className="stock-profile-widget-parent">
      <div className="dw-header-lv2">上海机场 (600009.SH)
        <div id="600009.SH-industry-desc" className="dw-subtitle">
          <div>
            <div data-show="true" className="ant-tag ant-tag-blue" style={{cursor: "auto"}}>申万交通运输(一级)</div>
            <div data-show="true" className="ant-tag ant-tag-geekblue" style={{cursor: "auto"}}>申万机场(二级)</div>
          </div>
        </div>
      </div>
      <div id="risk_card_container_600009" className="risk_card_container">
        <div className="risk_card">
          <div  className="card_wrapper">
            <div className="header">估值风险</div>
            <div className="content">
              <table className="risk_table">
                <tbody className="t_body">
                  <tr className="t_header">
                    <td> </td>
                    <td className="f_name">因子名称</td>
                    <td className="f_value">因子值</td>
                    <td className="f_rank_lv1">申万交通运输排名</td>
                    <td className="f_rank_lv2">申万机场排名</td>
                  </tr>
                  <tr className="t_row normal" data-fn="静态市净率的倒数" data-fc="bp_lr">
                    <td className="f_pre">
                      <span className="bar"></span>
                    </td>
                    <td className="f_name">
                      <span style={{cursor: "pointer"}}>静态市净率的倒数(bp_lr)</span>
                      <i className="anticon anticon-question-circle-o" style={{fontSize: '13px', color: 'rgb(10, 139, 248)', marginLeft: '8px'}}>
                      </i>
                    </td>
                    <td className="f_value">
                      <span>0.2551</span>
                    </td>
                    <td className="f_rank_lv1">
                      <span>111/126</span>
                    </td>
                    <td className="f_rank_lv2">
                      <span style={{color: "red"}}>4/4</span>
                    </td>
                    <td className="f_action">
                      <i title="查看因子排名走势" className="anticon anticon-eye" style={{fontSize: '16px', color: 'rgb(10, 139, 248)', cursor: 'pointer'}}>
                      </i>
                      <i title="打开因子详情页" className="anticon anticon-profile" style={{fontSize: '14px', color: 'rgb(10, 139, 248)', cursor:'pointer', marginLeft: '12px'}}>
                      </i>
                    </td>
                  </tr>
                  <tr className="t_row normal" data-fn="动态市盈率的倒数" data-fc="ep_ttm">
                    <td className="f_pre">
                      <span className="bar"></span>
                    </td>
                    <td className="f_name">
                      <span style={{cursor: 'pointer'}}>动态市盈率的倒数(ep_ttm)</span>
                      <i className="anticon anticon-question-circle-o" style={{fontSize: '13px', color: 'rgb(10, 139, 248)', marginLeft: '8px'}}>
                      </i>
                    </td>
                    <td className="f_value">
                      <span>-0.0162</span>
                    </td>
                    <td className="f_rank_lv1">
                      <span style={{color: "red"}}>115/126</span>
                    </td>
                    <td className="f_rank_lv2">
                      <span style={{color: "red"}}>4/4</span>
                    </td>
                    <td className="f_action">
                      <i title="查看因子排名走势" className="anticon anticon-eye" style={{fontSize: '16px', color: 'rgb(10, 139, 248)', cursor: 'pointer'}}>
                      </i>
                      <i title="打开因子详情页" className="anticon anticon-profile" style={{fontSize: '14px', color: 'rgb(10, 139, 248)', cursor:'pointer', marginLeft: '12px'}}>
                      </i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="risk_card">
          <div  className="card_wrapper">
            <div className="header">数据库返回的收盘价</div>
            <div className="content">
              <table className="risk_table">
                <Test data={{
                  id: 'mainmain',
                  width: '800px',
                  height: '400px',
                  title: '数据库返回数据生成的图表',
                  xdata: this.table_data.trade_day,
                  //xdata: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                  ydata:[this.table_data.close],
                  //ydata: [[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                  //[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                  //[4.6, 10.8, 16, 50, 54.3, 147.4, 311.2, 344.4, 81.3, 38.8, 12.4, 5.6]],
                  legend: ['收盘价']
                  //legend: ['男孩', '女孩', '总人数']
                }} />
              </table>
            </div>
          </div>
        </div> 

      {/*
        <div className="risk_card">
          <div className="card_wrapper">
            <div className="header">债务风险</div>
              <div className="content">
                <table className="risk_table">
                  <tbody className="t_body">
                    <tr className="t_header">
                      <td> </td>
                      <td className="f_name">因子名称</td>
                      <td className="f_value">因子值</td>
                      <td className="f_rank_lv1">申万交通运输排名</td>
                      <td className="f_rank_lv2">申万机场排名</td>
                    </tr>
                    <tr className="t_row normal" data-fn="偿债能力比率" data-fc="cashflow2totaldebt">
                      <td className="f_pre">
                        <span className="bar"></span>
                      </td>
                      <td className="f_name">
                        <span style="cursor: pointer;">偿债能力比率(cashflow2totaldebt)</span>
                        <i class="anticon anticon-question-circle-o" style="font-size: 13px; color: rgb(10, 139, 248); margin-left: 8px;">  
                        </i>
                      </td>
                      <td className="f_value">
                        <span>-0.0025</span>
                      </td>
                      <td className="f_rank_lv1">
                        <span>110/126</span>
                      </td>
                      <td className="f_rank_lv2">
                        <span>3/4</span>
                      </td>
                      <td className="f_action">
                        <i title="查看因子排名走势" class="anticon anticon-eye" style="font-size: 16px; color: rgb(10, 139, 248); cursor: pointer;">
                        </i>
                        <i title="打开因子详情页" class="anticon anticon-profile" style="font-size: 14px; color: rgb(10, 139, 248); cursor: pointer; margin-left: 12px;">
                        </i>
                      </td>
                    </tr>
                    <tr className="t_row normal" data-fn="股东权益对负债比率" data-fc="equity2totaldebt">
                      <td className="f_pre">
                        <span className="bar"></span>
                      </td>
                      <td className="f_name">
                        <span style="cursor: pointer;">股东权益对负债比率(equity2totaldebt)</span>
                        <i class="anticon anticon-question-circle-o" style="font-size: 13px; color: rgb(10, 139, 248); margin-left: 8px;">
                        </i>
                      </td>
                      <td className="f_value">
                        <span>1.1830</span>
                      </td>
                      <td className="f_rank_lv1">
                        <span>55/126</span>
                      </td>
                      <td className="f_rank_lv2">
                        <span style="color: red;">4/4</span>
                      </td>
                      <td className="f_action">
                        <i title="查看因子排名走势" class="anticon anticon-eye" style="font-size: 16px; color: rgb(10, 139, 248); cursor: pointer;">
                        </i>
                        <i title="打开因子详情页" class="anticon anticon-profile" style="font-size: 14px; color: rgb(10, 139, 248); cursor: pointer; margin-left: 12px;">
                        </i>
                      </td>
                    </tr>
                    <tr className="t_row normal" data-fn="利息覆盖倍数" data-fc="interestcover">
                      <td className="f_pre">
                        <span className="bar"></span>
                      </td>
                      <td className="f_name">
                        <span style="cursor: pointer;">利息覆盖倍数(interestcover)</span>
                        <i class="anticon anticon-question-circle-o" style="font-size: 13px; color: rgb(10, 139, 248); margin-left: 8px;">
                        </i>
                      </td>
                      <td className="f_value">
                        <span>-4.6452</span>
                      </td>
                      <td className="f_rank_lv1">
                        <span style="color: red;">123/126</span>
                      </td>
                      <td className="f_rank_lv2">
                        <span>3/4</span>
                      </td>
                      <td className="f_action">
                        <i title="查看因子排名走势" class="anticon anticon-eye" style="font-size: 16px; color: rgb(10, 139, 248); cursor: pointer;">
                        </i>
                        <i title="打开因子详情页" class="anticon anticon-profile" style="font-size: 14px; color: rgb(10, 139, 248); cursor: pointer; margin-left: 12px;">
                        </i>
                      </td>
                    </tr>
                    <tr className="t_row normal" data-fn="资产负债率的倒数" data-fc="ta2debt">
                      <td className="f_pre">
                        <span className="bar"></span>
                      </td>
                      <td className="f_name">
                        <span style="cursor: pointer;">资产负债率的倒数(ta2debt)</span>
                        <i class="anticon anticon-question-circle-o" style="font-size: 13px; color: rgb(10, 139, 248); margin-left: 8px;">
                        </i>
                      </td>
                      <td className="f_value">
                        <span>2.1908</span>
                      </td>
                      <td className="f_rank_lv1">
                        <span>61/126</span>
                      </td>
                      <td className="f_rank_lv2">
                        <span style="color: red;">4/4</span>
                      </td>
                      <td className="f_action">
                        <i title="查看因子排名走势" class="anticon anticon-eye" style="font-size: 16px; color: rgb(10, 139, 248); cursor: pointer;">
                        </i>
                        <i title="打开因子详情页" class="anticon anticon-profile" style="font-size: 14px; color: rgb(10, 139, 248); cursor: pointer; margin-left: 12px;">
                        </i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        </div>
        <div className="risk_card">
          <div className="card_wrapper">
            <div className="header">增长风险</div>
            <div className="content">
              <table className="risk_table">
                <tbody className="t_body">
                  <tr className="t_header">
                    <td> </td>
                    <td className="f_name">因子名称</td>
                    <td className="f_value">因子值</td>
                    <td className="f_rank_lv1">申万交通运输排名</td>
                    <td className="f_rank_lv2">申万机场排名</td>
                  </tr>
                  <tr className="t_row normal" data-fn="单季度营业利润同比增长率" data-fc="saleearnings_sq_yoy">
                    <td className="f_pre">
                      <span className="bar"></span>
                    </td>
                    <td className="f_name">
                      <span style="cursor: pointer;">单季度营业利润同比增长率(saleearnings_sq_yoy)</span>
                      <i class="anticon anticon-question-circle-o" style="font-size: 13px; color: rgb(10, 139, 248); margin-left: 8px;">
                      </i>
                    </td>
                    <td className="f_value">
                      <span>-34.9100</span>
                    </td>
                    <td className="f_rank_lv1">
                      <span>91/126</span>
                    </td>
                    <td className="f_rank_lv2">
                      <span>2/4</span>
                    </td>
                    <td className="f_action">
                      <i title="查看因子排名走势" class="anticon anticon-eye" style="font-size: 16px; color: rgb(10, 139, 248); cursor: pointer;">
                      </i>
                      <i title="打开因子详情页" class="anticon anticon-profile" style="font-size: 14px; color: rgb(10, 139, 248); cursor: pointer; margin-left: 12px;">
                      </i>
                    </td>
                  </tr>
                  <tr className="t_row normal" data-fn="营业收入增长" data-fc="salesgrowth">
                    <td className="f_pre">
                      <span className="bar"></span>
                    </td>
                    <td className="f_name">
                      <span style="cursor: pointer;">营业收入增长(salesgrowth)</span>
                      <i class="anticon anticon-question-circle-o" style="font-size: 13px; color: rgb(10, 139, 248); margin-left: 8px;">
                      </i>
                    </td>
                    <td className="f_value">
                      <span>-60.6798</span>
                    </td>
                    <td className="f_rank_lv1">
                      <span style="color: red;">125/126</span>
                    </td>
                    <td className="f_rank_lv2">
                      <span style="color: red;">4/4</span>
                    </td>
                    <td className="f_action">
                      <i title="查看因子排名走势" class="anticon anticon-eye" style="font-size: 16px; color: rgb(10, 139, 248); cursor: pointer;">
                      </i>
                      <i title="打开因子详情页" class="anticon anticon-profile" style="font-size: 14px; color: rgb(10, 139, 248); cursor: pointer; margin-left: 12px;">
                      </i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="risk_card">
          <div className="card_wrapper">
            <div className="header">技术风险</div>
            <div className="content">
              <table className="risk_table">
                <tbody className="t_body">
                  <tr className="t_header">
                    <td> </td>
                    <td className="f_name">因子名称</td>
                    <td className="f_value">因子值</td>
                    <td className="f_rank_lv1">申万交通运输排名</td>
                    <td className="f_rank_lv2">申万机场排名</td>
                  </tr>
                  <tr className="t_row normal" data-fn="股票月收益" data-fc="monthlyreturn">
                    <td className="f_pre">
                      <span className="bar"></span>
                    </td>
                    <td className="f_name">
                      <span style="cursor: pointer;">股票月收益(monthlyreturn)</span>
                      <i class="anticon anticon-question-circle-o" style="font-size: 13px; color: rgb(10, 139, 248); margin-left: 8px;">
                      </i>
                    </td>
                  <td className="f_value">
                    <span>1.1542</span>
                  </td>
                <td className="f_rank_lv1">
                  <span>1/126</span>
                </td>
                <td className="f_rank_lv2">
                  <span>1/4</span>
                </td>
                <td className="f_action">
                  <i title="查看因子排名走势" class="anticon anticon-eye" style="font-size: 16px; color: rgb(10, 139, 248); cursor: pointer;">
                  </i>
                  <i title="打开因子详情页" class="anticon anticon-profile" style="font-size: 14px; color: rgb(10, 139, 248); cursor: pointer; margin-left: 12px;">
                  </i>
                </td>
              </tr>
              <tr className="t_row normal" data-fn="月成交量波动率" data-fc="monthlyvolumevolatility">
                <td className="f_pre">
                  <span className="bar"></span>
                </td>
                <td className="f_name">
                  <span style="cursor: pointer;">月成交量波动率(monthlyvolumevolatility)</span>
                  <i class="anticon anticon-question-circle-o" style="font-size: 13px; color: rgb(10, 139, 248); margin-left: 8px;">
                  </i>
                </td>
                <td className="f_value">
                  <span>0.3901</span>
                </td>
                <td className="f_rank_lv1">
                  <span>53/126</span>
                </td>
                <td className="f_rank_lv2">
                  <span>1/4</span>
                </td>
                <td className="f_action">
                  <i title="查看因子排名走势" class="anticon anticon-eye" style="font-size: 16px; color: rgb(10, 139, 248); cursor: pointer;">
                  </i>
                  <i title="打开因子详情页" class="anticon anticon-profile" style="font-size: 14px; color: rgb(10, 139, 248); cursor: pointer; margin-left: 12px;">
                  </i>
                </td>
              </tr>
              <tr className="t_row normal" data-fn="股票周收益" data-fc="weeklyreturn">
                <td className="f_pre">
                  <span className="bar"></span>
                </td>
                <td className="f_name">
                  <span style="cursor: pointer;">股票周收益(weeklyreturn)</span>
                  <i class="anticon anticon-question-circle-o" style="font-size: 13px; color: rgb(10, 139, 248); margin-left: 8px;">
                  </i>
                </td>
                <td className="f_value">
                  <span>-0.0091</span>
                </td>
                <td className="f_rank_lv1">
                  <span>89/126</span>
                </td>
                <td className="f_rank_lv2">
                  <span>1/4</span>
                </td>
                <td className="f_action">
                  <i title="查看因子排名走势" class="anticon anticon-eye" style="font-size: 16px; color: rgb(10, 139, 248); cursor: pointer;">
                  </i>
                  <i title="打开因子详情页" class="anticon anticon-profile" style="font-size: 14px; color: rgb(10, 139, 248); cursor: pointer; margin-left: 12px;"><svg viewBox="64 64 896 896" className="" data-icon="profile" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                  </i>
                </td>
                </tr>
                  <tr className="t_row normal" data-fn="周均换手率" data-fc="weeklyturnoveravg">
                    <td className="f_pre">
                      <span className="bar"></span>
                    </td>
                    <td className="f_name">
                      <span style="cursor: pointer;">周均换手率(weeklyturnoveravg)</span>
                      <i class="anticon anticon-question-circle-o" style="font-size: 13px; color: rgb(10, 139, 248); margin-left: 8px;">
                      </i>
                    </td>
                    <td className="f_value">
                      <span>1.6278</span>
                    </td>
                    <td className="f_rank_lv1">
                      <span>25/125</span>
                    </td>
                    <td className="f_rank_lv2">
                      <span>1/4</span>
                    </td>
                    <td className="f_action">
                      <i title="查看因子排名走势" class="anticon anticon-eye" style="font-size: 16px; color: rgb(10, 139, 248); cursor: pointer;">
                      </i>
                      <i title="打开因子详情页" class="anticon anticon-profile" style="font-size: 14px; color: rgb(10, 139, 248); cursor: pointer; margin-left: 12px;">
                      </i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="risk_card">
          <div className="card_wrapper">
            <div className="header">经营风险</div>
            <div className="content">
              <table className="risk_table">
                <tbody className="t_body">
                  <tr className="t_header">
                    <td> </td>
                    <td className="f_name">因子名称</td>
                    <td className="f_value">因子值</td>
                    <td className="f_rank_lv1">申万交通运输排名</td>
                    <td className="f_rank_lv2">申万机场排名</td>
                  </tr>
                  <tr className="t_row normal" data-fn="外部融资程度" data-fc="finance2ta">
                    <td className="f_pre">
                      <span className="bar"></span>
                    </td>
                    <td className="f_name">
                      <span style="cursor: pointer;">外部融资程度(finance2ta)</span>
                      <i class="anticon anticon-question-circle-o" style="font-size: 13px; color: rgb(10, 139, 248); margin-left: 8px;">
                      </i>
                    </td>
                    <td className="f_value">
                      <span>0.0661</span>
                    </td>
                    <td className="f_rank_lv1">
                      <span>93/126</span>
                    </td>
                    <td className="f_rank_lv2">
                      <span>3/4</span>
                    </td>
                    <td className="f_action">
                      <i title="查看因子排名走势" class="anticon anticon-eye" style="font-size: 16px; color: rgb(10, 139, 248); cursor: pointer;">
                      </i>
                      <i title="打开因子详情页" class="anticon anticon-profile" style="font-size: 14px; color: rgb(10, 139, 248); cursor: pointer; margin-left: 12px;">
                      </i>
                    </td>
                  </tr>
                  <tr className="t_row normal" data-fn="毛利率" data-fc="grossmarginttm">
                    <td className="f_pre">
                      <span className="bar"></span>
                    </td>
                    <td className="f_name">
                      <span style="cursor: pointer;">毛利率(grossmarginttm)</span>
                      <i class="anticon anticon-question-circle-o" style="font-size: 13px; color: rgb(10, 139, 248); margin-left: 8px;">
                      </i>
                    </td>
                    <td className="f_value">
                      <span>-0.7569</span>
                    </td>
                    <td className="f_rank_lv1">
                      <span style="color: red;">126/126</span>
                    </td>
                    <td className="f_rank_lv2">
                      <span style="color: red;">4/4</span>
                    </td>
                    <td className="f_action">
                      <i title="查看因子排名走势" class="anticon anticon-eye" style="font-size: 16px; color: rgb(10, 139, 248); cursor: pointer;">
                      </i>
                      <i title="打开因子详情页" class="anticon anticon-profile" style="font-size: 14px; color: rgb(10, 139, 248); cursor: pointer; margin-left: 12px;">
                      </i>
                    </td>
                  </tr>
                  <tr className="t_row normal" data-fn="营业利润率" data-fc="operatingprofitmargin">
                    <td className="f_pre">
                      <span className="bar"></span>
                    </td>
                    <td className="f_name">
                      <span style="cursor: pointer;">营业利润率(operatingprofitmargin)</span>
                      <i class="anticon anticon-question-circle-o" style="font-size: 13px; color: rgb(10, 139, 248); margin-left: 8px;">
                      </i>
                    </td>
                    <td className="f_value">
                      <span>-0.6215</span>
                    </td>
                    <td className="f_rank_lv1">
                      <span style="color: red;">125/126</span>
                    </td>
                    <td className="f_rank_lv2">
                      <span style="color: red;">4/4</span>
                    </td>
                    <td className="f_action">
                      <i title="查看因子排名走势" class="anticon anticon-eye" style="font-size: 16px; color: rgb(10, 139, 248); cursor: pointer;">
                      </i>
                      <i title="打开因子详情页" class="anticon anticon-profile" style="font-size: 14px; color: rgb(10, 139, 248); cursor: pointer; margin-left: 12px;"><svg viewBox="64 64 896 896" className="" data-icon="profile" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                      </i>
                    </td>
                  </tr>
                  <tr className="t_row activate" data-fn="净资产收益率" data-fc="roe_ttm">
                    <td className="f_pre">
                      <span className="bar"></span>
                    </td>
                    <td className="f_name">
                      <span style="cursor: pointer;">净资产收益率(roe_ttm)</span>
                      <i class="anticon anticon-question-circle-o" style="font-size: 13px; color: rgb(10, 139, 248); margin-left: 8px;">
                      </i>
                    </td>
                    <td className="f_value">
                      <span>-0.0622</span>
                    </td>
                    <td className="f_rank_lv1">
                      <span style="color: red;">117/126</span>
                    </td>
                    <td className="f_rank_lv2">
                      <span style="color: red;">4/4</span>
                    </td>
                    <td className="f_action">
                      <i title="查看因子排名走势" class="anticon anticon-eye" style="font-size: 16px; color: rgb(10, 139, 248); cursor: pointer;">
                      </i>
                      <i title="打开因子详情页" class="anticon anticon-profile" style="font-size: 14px; color: rgb(10, 139, 248); cursor: pointer; margin-left: 12px;">
                      </i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      */}  


      </div>
    </div>   


    )
  }
}