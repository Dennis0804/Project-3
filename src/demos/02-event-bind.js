import React, { Component } from "react";

// class App extends Component {
//     constructor(){
//         super();
//         // this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick(id){
//         console.log(id)
//     }
//     handleCli = (id)=>{
//         console.log(id);

//     }
// 	render() {
// 		return (
//             <div>
//                 <button onClick={this.handleClick.bind(this,100)}>click</button>
//             </div>
// 		);
// 	}
// }

const App = ()=>{
    
    const handleClick = ()=>{
        console.log('fn click')
    }
    return <button onClick={handleClick}>
        click
    </button>
}

export default App;
