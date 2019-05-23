import React from "react";
import { Button } from "antd";
import ImageEditer from "../../lib/index.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      image: ""
    };
  }
  handleCancel() {
    this.setState(() => {
      return {
        visible: false
      };
    });
  }
  handleClick({ _no }) {
    if (_no == 0) {
      this.setState(
        {
          image: "../public/images/23.jpg"
        },
        () => {
          this.setState({
            visible: true
          });
        }
      );
    } else if (_no == 1) {
      this.setState(
        {
          image: "../public/images/27.jpg"
        },
        () => {
          this.setState({
            visible: true
          });
        }
      );
    } else if (_no == 2) {
      this.setState(
        {
          image: "../public/images/8.jpg"
        },
        () => {
          this.setState({
            visible: true
          });
        }
      );
    } else {
      return;
    }
  }
  handleSubmit(e){
    console.log("提交的数据是：",e)
  }
  render() {
    const { visible, image } = this.state;
    return (
      <div
        className='container'
        style={{
          overflow: "hidden"
        }}
        onClick={this.handleClick.bind(this)}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100vw",
            height: "100vh"
          }}
        >
          <Button type='primary' onClick={this.handleClick.bind(this, { _no: 0 })}>
            长方形图片（纵向）
          </Button>
          <Button type='primary' onClick={this.handleClick.bind(this, { _no: 1 })}>
            正方形图片
          </Button>
          <Button type='primary' onClick={this.handleClick.bind(this, { _no: 2 })}>
            长方形图片（横向）
          </Button>
        </div>
        <ImageEditer
          visible={visible}
          image={image}
          isCloseToUpdate={true}
          onClose={this.handleCancel.bind(this)}
          onOK={this.handleSubmit.bind(this)}
        />
      </div>
    );
  }
}
export default App;
