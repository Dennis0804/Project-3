import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render( 
    <App />,
    document.getElementById('root') 
);
    
    
    
    
// let ele = <div id='box' className='con'>
//     {[<div>我终于写完了</div>,
//     <h2>hello </h2>,'world',
//     <h3>react</h3>]}
// </div>


// let ReactDOM = {
//     render(eleObj,container){
//         console.log(eleObj);
//         const {type,props} = eleObj;
//         const ele = document.createElement(type);
//         for (const prop in props) {
//             if(prop == 'children'){
//                 if(typeof props.children == 'string'){
//                     const txtNode = document.createTextNode(props.children);
//                     ele.appendChild(txtNode);
//                     continue;
//                 }
//                 props.children.forEach((child)=>{
//                     if(typeof child == 'string'){
//                         const txtNode = document.createTextNode(child);
//                         ele.appendChild(txtNode);
//                     }else{
//                         ReactDOM.render(child,ele)
//                     }
//                 })

//             }else if(prop == 'className'){
//                 ele.setAttribute('class',props[prop]);
//             }else{
//                 ele[prop] = props[prop];
//             }
                
//         }
//         container.appendChild(ele);
//     }
// }

// const render = (element,container)=>{
//     let {type,props} = element;
//     let ele = document.createElement(type);
//     for(let attr in props){
//         if(attr === 'className'){
//             ele.setAttribute('class',props[attr]);
//         }else if(attr === 'children'){
//             if(typeof props.children == 'string'){
//                 let txtNode = document.createTextNode(props.children);
//                 ele.appendChild(txtNode);
//                 continue;
//             }
//             props.children.forEach((child)=>{
//                 if(typeof child === 'string'){
//                     let txtNode = document.createTextNode(child);
//                     ele.appendChild(txtNode);
//                 }else{
//                     render(child,ele)
//                 }
//             })
//         }else{
//             ele.setAttribute(attr,props[attr]);
//         }
//     }
//     container.appendChild(ele);
// }