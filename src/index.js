import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/'
import {Provider} from 'react-redux'
ReactDOM.render(
  // <React.StrictMode>. 
  <Provider store={store}>
    <App />
  </Provider>
   ,
  // </React.StrictMode>,  //严格模式
  document.getElementById('root')
);
// store.subscribe(()=>{
//       console.log('index下面的state发生变化了')
//       // 重新取一下render来刷新页面
//       ReactDOM.render(
//         // <React.StrictMode>. 
//           <App />,
//         // </React.StrictMode>,  //严格模式
//         document.getElementById('root')
//       );
//   })
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
