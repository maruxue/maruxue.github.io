import React, { Component } from 'react';
import store from '../store';
class Reduxpage extends Component {
    componentDidMount(){
        // 订阅，发生改变通知一下----也可以在index.js里面去重新渲染
        // store.subscribe(()=>{
        //     console.log('state发生变化了')
        //     this.forceUpdate() // 强制刷新页面（class组件）
        // })

    }
    render() {
        console.log('store===',store)
        return (
            <div>
                <h3>ReduxPage</h3>
                <p>{store.getState()}</p>
                <button onClick={()=>store.dispatch({type:'ADD'})}>add</button>
                <button onClick={()=>store.dispatch({type:'MINUS'})}>MINUS</button>
            </div>
        );
    }
}

export default Reduxpage;
