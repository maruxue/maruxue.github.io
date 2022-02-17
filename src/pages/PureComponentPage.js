import React, { Component,PureComponent } from 'react';
// 性能优化简单页面可让其直接继承PureComponent,就没必要写shouldComponentUpdate了
/**
 * React.PureComponent 与 React.Component 很相似。两者的区别在于 React.Component 并未实
现 shouldComponentUpdate() ，⽽而 React.PureComponent 中以浅层对⽐比 prop 和 state 的⽅方式来
实现了了该函数。
如果赋予 React 组件相同的 props 和 state， render() 函数会渲染相同的内容，那么在某些情况下使
⽤用 React.PureComponent 可提⾼高性能。
*/
// class Purecomponentpage extends Component {
class Purecomponentpage extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            count:0,
            // obj:{num:0}
        }
    }
    setCount = ()=>{
        
        this.setState({count:100,
            // obj:{num:1000}
        }) //页面一直在渲染
    }
    // 实现性能优化----浅比较，只比较一层，必须要用class形式
    // shouldComponentUpdate(nextProps,nextState){
    //     // 判断不等的时候才渲染
    //    return nextState.count !==this.state.count
    // }
    render() {
        console.log('render==');
        const {count } = this.state;
        return (
            <div>
                <h3>Purecomponentpage</h3>
                <button onClick={this.setCount}>{count}</button>
            </div>
        );
    }
}

export default Purecomponentpage;
