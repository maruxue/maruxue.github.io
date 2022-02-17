import React, { Component } from 'react';
// class组件通常拥有状态和⽣生命周期，继承于Component，实现render⽅方法
class Classconponent extends Component {
    constructor(props) {
        super(props);
        // 存储状态
        this.state = { 
            date:new Date()
        };
    }
    //定时器---组件挂载完之后执行----生命周期
    componentDidMount(){
        this.timer = setInterval(()=>{
            //更新state，不能用this.state
            this.setState({
                date:new Date()
            });
        },1000)
    }
    //组件卸载之前执行--生命周期
    componentWillUnmount(){
        console.log('组件卸载生命函数')
      clearInterval(this.timer);
    }
    render() {
        const {date} = this.state;
        return (
            <div>
               <h3>ClassConponent</h3> 
               <p>{date.toLocaleTimeString()}</p>
            </div>
        );
    }
}
export default Classconponent;
