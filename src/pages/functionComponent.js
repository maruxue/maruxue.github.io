import React, {useState,useEffect} from 'react';
// 函数组件通常⽆无状态，仅关注内容展示，返回渲染结果即可。
const Functioncomponent = () => {
    const [date,setDate]  = useState(new Date())
    useEffect(()=>{
        console.log('useEffect')
        //相当于componentDidMount、componentWillUnmount的集合
        const timer = setInterval(()=>{
            setDate(new Date());
        },1000)
    })
    return (
        <div>
            <h3>functionComponent</h3>
            <p>{date.toLocaleTimeString()}</p>
        </div>
    );
}

export default Functioncomponent;
