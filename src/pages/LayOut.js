import React, { Component } from 'react';
import BottomBar from '../commpents/BottomBar';
import TopBar from '../commpents/TopBar';

class Layout extends Component {
    // 随时都变
    componentDidMount(){
        const {title='商城'} = this.props
        document.title =  title
    }
    render() {
        const {children,showTopbar,showBottomBar} = this.props
        console.log('this.props.children========',this.props.children)
        return (
            <div>
                {showTopbar && <TopBar/>}
                {/* 用来展示homepage页 */}
                {/* {this.props.children} */}
                {children.content}
                {children.txt}
                <button onClick={children.btnClick}>button</button>
                {/* <h3>LayOut</h3> */}
                {showBottomBar && <BottomBar/>}
            </div>
        );
    }
}

export default Layout;
