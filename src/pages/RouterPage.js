import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom' 
class RouterPage extends Component {
    render() {
        return (
            <div>
                <h3>RouterPage</h3>
                <Router>
                    <Link to='/'>首页</Link>
                    <Link to='/user'>用户中心</Link>
                        {/* 根路路由要添加exact，实现精确匹配 */}
                        {/* 版本6.0写法变了   https://blog.csdn.net/katarinaxxx/article/details/121229750
                        以前版本Route 需要在 Router 里，组件为 component
                        Route 需要在 Routes 里，组件为 element,注意括号内为标签----element = {<HomePage/>}element = {<HomePage/>}
                        最后做个总结，react-router-dom@6相比之前的版本存在以下一些变化（以上demo中涉及到的）
                        1.BrowserRouter保持不变；
                        2.Switch替换成了Routes；
                        3.Route中统一使用element属性，去掉原来的component和render；
                        4.子路由可以省略上级路由了，比如/page1/page1-1以往需要写完整的Path，而目前可以继承上级页面的路由了，甚至斜线都可以省略；
                        5.useNavigate取代useHistory，并且api也有相应的变化；
                        6.新增了Outlet，作用相当于{this.props.children}。

                        */}
                        {/* 根路路由要添加exact，实现精确匹配 */}
                        {/* children>component > render  */}
                        <Switch>
                                <Route
                                exact
                                path="/"
                                component={HomePage}
                                // children={() => <div>children</div>}
                                // render={() => <div>render</div>}
                                />
                                <Route path="/user" component={UserPage} />
                                <Route component={EmptyPage} />
                                {/* <Routes>
                                <Route exact 
                                    path='/' 
                                    element = {<HomePage/>}
                                />
                                <Route path='/user' element = {<UserPage/>} />
                                </Routes> */}
                        </Switch>
                </Router>
                
            </div>
        );
    }
}
class HomePage extends Component{
    render(){
        return(
            <div>
                <h3>HomePage</h3>
            </div>
        )
    }
}
class UserPage extends Component{
    render(){
        return(
            <div>
                <h3>UserPage</h3>
            </div>
        )
    }
}
class EmptyPage extends Component{
    render(){
        return(
            <div>
                <h3>EmptyPage-404</h3>
            </div>
        )
    }
}
export default RouterPage;