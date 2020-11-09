import React, { Component } from "react";

class App extends Component {
    constructor(){
        super();
        this.state = {
            val:'请输入'
        }
    }
    handleChange = (e)=>{
        this.setState({
            val: e.target.value
        })
    }
    handleSubmit = ()=>{
        console.log(this.val.value)
    }
    componentDidMount(){
        this.val.focus()
    }
	render() {
		return (
            <div>
                <input ref={ inp=>this.val = inp} type="text"  defaultValue={this.state.val}/>

                <button onClick={this.handleSubmit}>提交</button>
            </div>
		);
	}
}



export default App;
