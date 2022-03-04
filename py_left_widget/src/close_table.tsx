import React from 'react';
import * as echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';

const defaultType = 'bar';
const defaultWidth = '100%';
const defaultHeight = '300px';
let getRandomID = () => Number(Math.random().toString().substr(4, 10) + Date.now()).toString(36)
let id = getRandomID();
class Test extends React.Component {
    props:any;
    constructor(props:any){
        super(props);
        
    }
    componentDidMount() {
        window.addEventListener("resize", function () {
            myChart.resize();
        });
        // 初始化
        let { title, xdata, ydata, legend } = this.props.data;
        console.log(this.props.data);
        let myChart = echarts.init(document.getElementById(id));
        let series:any[] = [];
        for (let i = 0; i < ydata.length; i++) {
            let item = {
                name: legend[i],
                type: defaultType,
                data: ydata[i],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            }
            series.push(item)
        }
        // 绘制图表
        myChart.setOption({
            title: { text: title },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: legend
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: {
                        show: true,
                        type: 'jpg'
                    }
                }
            },
            xAxis: [
                {
                    type: 'category',
                    data: xdata
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series
        });
    }
    render() {
        let { width, height } = this.props.data;
        return (
            //默认高宽
            <div id={id} style={{ width: width ? width : defaultWidth, height: height ? height : defaultHeight }}></div>
        );
    }
    
}

export default Test;