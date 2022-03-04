import React from 'react';
import { Upload, Button } from 'antd';
import 'antd/dist/antd.css';
//import reqwest from 'reqwest';  //这块要安装一下reqwest   npm install reqwest
import axios from 'axios';
class Demo extends React.Component {
  state = {
    fileList: [],
    uploading: false,
  }

  handleUpload = () => {
    const { fileList } = this.state;
    this.setState({
        uploading: true,
      });
    const fr = new FileReader();
    //let result_data;
    fr.onloadend = function(e:any){
        console.log(e.target.result);
        let result_data={
            file:e.target.result
        }
        axios({
            method: 'post',
            url: 'http://192.168.211.56:5000/risk_performance',
            data: result_data
        })
        .then(async function (response) {
            //window.alert(response.data.data);
            console.log(response.data.data.alpha);
            console.log(response.data.data.beta);
            const risk_card = document.createElement('div');
            risk_card.className = "risk_card";
            const card_wrapper = document.createElement('div');
            card_wrapper.className = "card_wrapper";
            const header = document.createElement('div');
            header.className = "header";
            header.textContent = '绩效分析结果';
            const content = document.createElement('div');
            content.className = "content";
            const risk_table = document.createElement('table');
            risk_table.className = "risk_table";
            const alpha = document.createElement('span');
            alpha.textContent = 'alpha:'+response.data.data.alpha;
            const beta = document.createElement('span');
            beta.textContent = 'beta:('+response.data.data.beta[0]+','+response.data.data.beta[1]+')';
            risk_card.appendChild(card_wrapper);
            card_wrapper.appendChild(header);
            card_wrapper.appendChild(content);
            content.appendChild(risk_table);
            risk_table.appendChild(alpha);
            risk_table.appendChild(beta);
            const parent:any = document.getElementById("risk_performance_content")
            parent.appendChild(risk_card);
                     // <div  className="card_wrapper">
                     //   <div className="header">数据库返回的收盘价</div>
                      //  <div className="content">
                     //     <table className="risk_table">

        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
            
        }); 
    }
   
    fr.readAsText(fileList[0])
    //const formData = new FormData();
    //formData.append('file1', fileList[0]);   //注意第一个参数是传给后台的参数名字，我的项目中叫file1
    //formData.append('file2', fileList[1]);   //注意第一个参数是传给后台的参数名字，我的项目中叫file2

    this.setState({
        uploading: false,
      });
    // You can use any AJAX library you like
    /*
    reqwest({
      url: 'http://192.168.211.56:5000/test_array',   //这块是你项目的接口
      method: 'post',
      processData: false,
      data: formData,
      success: () => {
        this.setState({
          fileList,
          uploading: false,
        });
        message.success('upload successfully.');
      },
      error: () => {
        this.setState({
          uploading: false,
        });
        message.error('upload failed.');
      },
    });
    */
  }

  render() {
    const { uploading, fileList } = this.state;
    const props = {
        
      onRemove: (file:never) => {
        this.setState(() => {
          const index = this.state.fileList.indexOf(file);
          const newFileList = this.state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      
      beforeUpload: (file) => {
        this.setState( ({
          fileList: [...this.state.fileList, file],
        }));
        return false;
      },
      fileList,
    };

    return (
      <div>
        <Upload {...props}>
          <Button>
            {/*<Icon type="upload" />*/} 
            选择文件
          </Button>
        </Upload>
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? '运行中' : '开始分析' }
        </Button>
      </div>
    );
  }
}
export default Demo;



