import React, { Component } from 'react';
import {connect} from 'react-redux'
export default connect (
    // mapStateToProps ---把state映射到props
    state=>({num:state}),
    // // mapDispatchToProps 把dispatch映射到props
    {
      add:()=>({type:"ADD"}),
      minus:()=>({type:'MINUS'})
    }
)(class ReactReduxPage extends Component {
    render() {
        const {num,dispatch,add,minus} = this.props
        console.log('props',this.props)
        return (
            <div>
                <h3>Reactredux</h3>
                <p>{num}</p>
                {/* <button onClick={()=> dispatch({type:'ADD'})}>add</button> */}
                <button onClick={add}>add</button>
                <button onClick={minus}>minus</button>
            </div>
        );
    }
})
