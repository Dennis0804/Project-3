import React,{Component} from 'react';

// 函数组件(hooks)
// function App(props) {

//   return <div>
//       <h1>{props.txt}</h1>
//     </div>;
// }

// 类组件

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    }
    this.timeId = setInterval(()=>{
      // this.setState({time:new Date().toLocaleTimeString()})
    },1000)
    console.log('constructor');
  }
  shouldComponentUpdate(){
    console.log('shouldUpDate');
    return true
  }
  componentDidUpdate(){
    console.log('did Update');
  }
  componentDidMount(){
    console.log('did mount')
  }
  componentWillUnmount(){
    clearInterval(this.timeId);
  }
  render(){
    console.log('render');
    return <div>
      <h1>{this.props.txt}</h1>
      <p>{this.state.time}</p>
    </div>
  }
}

export default App;
