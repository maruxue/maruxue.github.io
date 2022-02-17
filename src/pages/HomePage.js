import React, { Component } from 'react';
import Layout from './LayOut';
class HomePage extends Component {
    render() {
        return (
            <Layout showTopbar={false} showBottomBar = {true} title='商城首页'>
                {/* <div>
                    <h3>HomePage</h3>
                </div> */}
                {
                    // 具名========插槽定义法
                    {
                        content:(
                            <div>
                                <h3>HomePage</h3>
                            </div> 
                        ),
                        txt:'这是个文本',
                        btnClick:()=>{
                            console.log('btnClick')
                        }
                    }
                }
            </Layout>
        );
    }
}

export default HomePage;