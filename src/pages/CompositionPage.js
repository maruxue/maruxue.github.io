import React, { Component } from 'react';
// 实现⼀一个简单的复合组件，如antD的Card
function Card(props){
    return  <div xu='card'>
            {props.children}
        </div>
}
function Formbutton(props){
    return <div className = 'Formbutton'>
        <button onClick={props.children.defaultBtns.searchClick}>默认查询</button>
        <button onClick={props.children.defaultBtns.resetClick}>默认重置</button>
        {
            props.children.btns.map((item,index)=>{
                return <button key={'btn'+index} onClick={item.onClick}>{item.title}</button>
            })
        }
        

    </div>
}
class Compositionpage extends Component {
    render() {
        return (
            <div>
                <Card>
                    <p>我是内容</p>
                </Card>
                Compositionpage
                <Card>
                    <p>我是内容2</p>
                </Card>
                <Formbutton>
                    {
                        {
                            // btns:(
                            //     <>
                            //       <button onClick={()=>console.log('enn')}>查询</button>
                            //       <button onClick={()=>console.log('enn2')}>查询2</button>
                            //     </>
                            // ),
                            defaultBtns:{
                                searchClick:()=>console.log('默认查询'),
                                resetClick:()=>console.log('默认重置')
                            },
                            btns:[
                                {
                                    title:'查询',
                                    onClick:()=>console.log('查询')

                                },
                                {
                                    title:'重置',
                                    onClick:()=>console.log('重置')

                                }
                            ]
                        }
                    }
                </Formbutton>
            </div>
        );
    }
}

export default Compositionpage;
