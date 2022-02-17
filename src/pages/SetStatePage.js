import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SetStatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:0
        }

    }
    changeValue=(v)=>{
        // // setState 在合成事件和生命周期中是异步的，这里说的异步其实是批量更新，达到了优化性能的目的
        // this.setState({
        //     counter:this.state.counter + v
        // },()=>{
        //     // callback就是在state更新完成之后再执行
        //     console.log('setSate执行之后的conuter======',this.state.counter)  
        // })
        // console.log('conuter======',this.state.counter)  // 同步就是说在这里里面能拿到更新之后的值，异步是拿不到的
        
        // 实现链式调用
        this.setState((state)=>{
            return {
                counter: state.counter+v
            }
        })
    }
    setCounter=()=>{
        this.changeValue(1)
        this.changeValue(2)
        this.changeValue(3)
        //  setState 在setTimeout和原生事件种事同步的
        // setTimeout(()=>{
        //     this.changeValue(1) 
        // },1000)  // 同步了
    }
    // UNSAFE_componentWillMount() {
    // }

    componentDidMount() {
        // this.changeValue(1) 
        document.getElementById('test').addEventListener('click',this.setCounter)
    }

    // UNSAFE_componentWillReceiveProps(nextProps) {

    // }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    // UNSAFE_componentWillUpdate(nextProps, nextState) {

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    // componentWillUnmount() {

    // }

    render() {
        return (
            <div>
            <h3>SetStatePage</h3>
            <button onClick={this.setCounter}>{this.state.counter}</button>
            <button id="test">原生事件*{this.state.counter}</button>
            </div>
        );
    }
}

// SetStatePage.propTypes = {

// };

export default SetStatePage;