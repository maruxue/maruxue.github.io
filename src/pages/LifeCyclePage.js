import React, { Children, Component } from 'react';
import PropTypes from 'prop-types'
class Lifecyclepage extends Component {
    static defaultProps = {
        msg:'omg'
    }
    static propType = {
        // msg:PropTypes.string //.isRequired
    }
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
        console.log('constructor');
    }
    componentWillMount(){
        console.log('UNSAFE_componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    // 需要做更新
    shouldComponentUpdate(nextProps,nextState){
        const { count } = nextState
        console.log('shouldComponentUpdate',nextState,this.state)
        // console.log('count !== 3===',count !== 3)
        //false就不渲染页面
        return count !== 3;
    }
    componentWillUpdate (){
        console.log('UNSAFE_componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')

    }
    setCount = () => {
        this.setState({count:this.state.count+1})
    };
    render() {
        console.log('render',this.props)
        const {count} = this.state
        return (
            <div>
                <h3>LifeCyclePage</h3>
                <p>{count}</p>
                <button onClick={this.setCount}>改变count</button>
                {/* {count % 2 && <Child count={count}></Child>} */}
                <Child count={count}></Child>
            </div>
        );
    }
}

class Child extends Component{
    //不不推荐，将会被废弃----如果还想使用，通过命令全局加UNSAFE
    // UNSAFE_componentWillMount
    // UNSAFE_componentWillReceiveProps
    // UNSAFE_componentWillUpdate
    // UNSAFE_UNSAFE_componentWillReceiveProps() 会在已挂载的组件接收新的 props 之前被调⽤用
    // 初次渲染的时候不会执行，只有再已挂载的组件接收新的props的时候才会执行
    componentWillReceiveProps(nextProps){
        console.log('UNSAFE_componentWillReceiveProps',nextProps)
    }
    // 组件将要被卸载
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render(){
        console.log('child render')
        const {count} = this.props
        return (
            <div>
                <h3>Child</h3>
                <p>{count}</p>
            </div>
        )
    }
}

export default Lifecyclepage;
