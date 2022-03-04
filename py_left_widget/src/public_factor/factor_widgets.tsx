import React from 'react';
import {ReactWidget} from "@jupyterlab/apputils";

export class factor_prehandle_Widget extends ReactWidget {
    /**
     * Constructs a new CounterWidget.
     */
    factor_name:string;
    new_factor_name_placeholder:string;
    constructor(factor_name:string) {
      super();
      this.addClass('jp-ReactWidget');
      this.factor_name = factor_name;
      this.new_factor_name_placeholder = this.factor_name+'_预处理';
    }

    render(): JSX.Element {
      return (
        <div>
            <div>
                <div className='generalDialogDescription'>
                    <span className='infoBtn'></span>
                    <span>选择所需的因子处理方式，并生成新的因子到私有因子库中</span>
                    <p className='p_item'>
                        <div className='p_name'>
                            <label className='p_label'>原始因子</label>
                        </div>
                        <span className='p_value' id='fct_name' >{this.factor_name}</span>
                    </p>
                    <p className='p_item'>
                        <div className='p_name'>
                            <label className='p_label'>新因子名称</label>
                        </div>
                        <input className='p_value' placeholder={this.new_factor_name_placeholder} id='new_name'></input>
                    </p>
                    <p className='p_item'>
                        <div className='p_name'>
                            <label className='p_label'>起止时间</label>
                        </div>
                        <input className='p_value' type='date' id='start_t'></input>
                        <span>-</span>
                        <input className='p_value' type='date' id='end_t'></input>
                    </p>
                    <p className='p_item'>
                        <div className='p_name'>
                            <label className='p_label'>分位数去极值</label>
                            {/*<span className='desIcon'></span>*/}
                        </div>
                        <select className='p_value' id='is_winsorize'>
                            <option value='True'>是</option>
                            <option value='False'>否</option>
                        </select>
                    </p>
                    <p className="p_item">
                        <div className="p_name">
                            <label className='p_label'>过滤ST的股票</label>
                        </div>
                        <select className="is_filter_st p_value" id='is_filter_st'>
                            <option value="True">是</option>
                            <option value="False">否</option>
                        </select>
                    </p>
                    <p className="p_item">
                        <div className="p_name">
                            <label>过滤停牌的股票</label>
                        </div>
                        <select className="is_filter_suspend p_value" id="is_filter_suspend">
                            <option value="True">是</option>
                            <option value="False">否</option>
                        </select>
                    </p>
                    <p className="p_item">
                        <div className="p_name">
                            <label>在全A股做标准化</label>
                        </div>
                        <select className="is_standardize_whole_scope p_value" id="is_standardize_whole_scope">
                            <option value="True">是</option>
                            <option value="False">否</option>
                        </select>
                    </p>
                    <p className="p_item" >
                        <div className="p_name">
                            <label>分行业做标准化</label>
                            {/*<span className="generalAnalyUI_desIcon"></span>*/}
                        </div>
                        <select className="is_standardize_indu_wise p_value" id="is_standardize_indu_wise">
                            <option value="True">是</option>
                            <option value="False">否</option>
                        </select>
                    </p>
                    <p className="p_item">
                        <div className="p_name">
                            <label>市值截面回归求残差</label>
                        </div>
                        <select className="is_mkt_neutralize p_value" id="is_mkt_neutralize">
                            <option value="True">是</option>
                            <option value="False">否</option>
                        </select>
                    </p>
                    <p className="p_item">
                        <div className="p_name">
                            <label>时间参数(天)</label>
                        </div>
                        <input className="factor_timeperiod p_value" type="number" id="factor_timeperiod"></input>
                    </p>
                    {/*
                    <p className="p_item">
                        <div className="p_name">
                            <label>因子描述</label>
                        </div>
                        <textarea className="factor_description p_value" id="factor_description" placeholder="请输入因子描述信息"></textarea>
                    </p>
                    */}
                </div>
            </div>
        </div>
        )
    }

    getValue(){
        let new_n = (document.querySelectorAll('#new_name')[0] as HTMLInputElement).value
        if (new_n==''){
            new_n = (document.querySelectorAll('#new_name')[0] as HTMLInputElement).placeholder
        }

        return {
            fct_name:(document.querySelectorAll('#fct_name')[0] as HTMLSpanElement).textContent,
            new_name:new_n,
            start_t:(document.querySelectorAll('#start_t')[0] as HTMLInputElement).value,
            end_t:(document.querySelectorAll('#end_t')[0] as HTMLInputElement).value,
            is_winsorize:(document.querySelectorAll('#is_winsorize')[0] as HTMLSelectElement).value,
            is_filter_st:(document.querySelectorAll('#is_filter_st')[0] as HTMLSelectElement).value,
            is_filter_suspend:(document.querySelectorAll('#is_filter_suspend')[0] as HTMLSelectElement).value,
            is_standardize_whole_scope:(document.querySelectorAll('#is_standardize_whole_scope')[0] as HTMLSelectElement).value,
            is_standardize_indu_wise:(document.querySelectorAll('#is_standardize_indu_wise')[0] as HTMLSelectElement).value,
            is_mkt_neutralize:(document.querySelectorAll('#is_mkt_neutralize')[0] as HTMLSelectElement).value,
            factor_timeperiod:(document.querySelectorAll('#factor_timeperiod')[0] as HTMLInputElement).value
        }
    }
}

export class factor_analysis_Widget extends ReactWidget {
    /**
     * Constructs a new CounterWidget.
     */
    factor_name:string;
    constructor(factor_name:string) {
      super();
      this.addClass('jp-ReactWidget');
      this.factor_name = factor_name;
    }
  
    render(): JSX.Element {
      return (
        <div>
            <div>
                <div className='generalDialogDescription'>
                    <p className='p_item'>
                        <div className='p_name'>
                            <label className='p_label'>分析因子</label>
                        </div>
                        <span className='p_value' id='fct_name'>{this.factor_name}</span>
                    </p>
                    <p className='p_item'>
                        <div className='p_name'>
                            <label className='p_label'>起止时间</label>
                        </div>
                        <input className='p_value' type='date' id='start_t'></input>
                        <span>-</span>
                        <input className='p_value' type='date' id='end_t'></input>
                    </p>
                    <p className="p_item">
                        <div className="p_name">
                            <label>时间参数(天)：</label>
                        </div>
                        <input className="p_value fctParamTimeperiod" id="fctParamTimeperiod" type="number"></input>
                    </p>
                    <p className="p_item">
                        <div className="p_name">
                            <label>分组数：</label>
                        </div>
                        <input className="p_value fctParamQuantiles" id="fctParamQuantiles" type="number" defaultValue="10"></input>
                        {/*<span className="errorMsg analy_quantiles_errMsg">分组数不能为空</span>*/}
                    </p>
                    <p className="p_item">
                        <div className="p_name">
                            <label>观测时间段：</label>
                        </div>
                        <input className="fctParamPeriods p_value" defaultValue="22" id="observe_cycle"></input>
                        <span className="periodsDes" style={{color:'black'}}>  * 请输入观测时间段，用英文逗号隔开，如：1,5,22,60 </span>
                    </p>

                </div>
            </div>
        </div>
        )
    }

    getValue(){     
        return {
            fct_name:(document.querySelectorAll('#fct_name')[0] as HTMLSpanElement).textContent,
            start_t:(document.querySelectorAll('#start_t')[0] as HTMLInputElement).value,
            end_t:(document.querySelectorAll('#end_t')[0] as HTMLInputElement).value,
            fctParamTimeperiod:(document.querySelectorAll('#fctParamTimeperiod')[0] as HTMLInputElement).value,
            fctParamQuantiles:(document.querySelectorAll('#fctParamQuantiles')[0] as HTMLInputElement).value,
            observe_cycle:(document.querySelectorAll('#observe_cycle')[0] as HTMLInputElement).value,
        }
    }
}

export class factor_backtest_Widget extends ReactWidget {
    /**
     * Constructs a new CounterWidget.
     */
    factor_name:string
    constructor(factor_name:string) {
      super();
      this.addClass('jp-ReactWidget');
      this.factor_name = factor_name;
    }
  
    render(): JSX.Element {
      return (
        <div>
            <div>
                <div className='generalDialogDescription'>
                    <p className='p_item'>
                        <div className='p_name'>
                            <label className='p_label'>回测因子</label>
                        </div>
                        <span className='p_value' id='fct_name'>{this.factor_name}</span>
                    </p>
                    <p className='p_item'>
                        <div className='p_name'>
                            <label className='p_label'>起止时间</label>
                        </div>
                        <input className='p_value' type='date' id='start_t'></input>
                        <span>-</span>
                        <input className='p_value' type='date' id='end_t'></input>
                    </p>
                    <p className="p_item">
                        <div className="p_name">
                            <label>调仓周期</label>
                        </div>
                        <select className="frequency p_value" id="frequency">
                            <option value="month_end">月</option>
                            <option value="week_end">周</option>
                            <option value="daily">日</option>
                        </select>
                    </p>
                    <p className="p_item">
                        <div className="p_name">
                            <label>参考基准</label>
                        </div>
                        <select className="paramSelectInput benchmark p_value" id="benchmark">
                            <option value="000905.SH">中证500</option>
                            <option value="000300.SH">沪深300</option>
                            <option value="000016.SH">上证50</option>
                            <option value="000001.SH">上证指数</option>
                            <option value="self">自定义</option>
                        </select>
                        {/*
                        <p className="input_para benchmark_input_para hide">
                            <input className="p_value benchmark_p_value" placeholder="请输入自定义参考基准"></input>
                        </p>
                        */}
                    </p>
                    <p className="p_item">
                        <div className="p_name">
                            <label>分组数</label>
                        </div>
                        <input className="group p_value" type="number" id="group"></input>  
                    </p>
                    <p className="p_item">
                        <div className="p_name">
                            <label>时间参数(天)</label>
                        </div>
                        <input className="factor_timeperiod p_value" type="number" id="factor_timeperiod"></input>     
                    </p>
                </div>
            </div>
        </div>
        )
    }

    getValue(){
        return {
            fct_name:(document.querySelectorAll('#fct_name')[0] as HTMLSpanElement).textContent,
            start_t:(document.querySelectorAll('#start_t')[0] as HTMLInputElement).value,
            end_t:(document.querySelectorAll('#end_t')[0] as HTMLInputElement).value,
            frequency:(document.querySelectorAll('#frequency')[0] as HTMLSelectElement).value,
            benchmark:(document.querySelectorAll('#benchmark')[0] as HTMLSelectElement).value,
            group:(document.querySelectorAll('#group')[0] as HTMLInputElement).value,
            factor_timeperiod:(document.querySelectorAll('#factor_timeperiod')[0] as HTMLInputElement).value
        }
    }
}
