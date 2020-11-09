import React from 'react';
import {HashRouter as Router,Redirect,Route,NavLink,Switch} from 'react-router-dom'
import Home from './pages/Home'
import MyCourse from './pages/MyCourse'
import Login from './pages/Login'
import Header from './pages/Header'
import Payment from './pages/Payment';
import './app.less'

const App = ()=>{
	return <Router>
		<Header />
		<Switch>
			<Route exact path='/' component={ Home } />
			<Route path='/mycourse' component={ MyCourse } /> 
			<Route path='/payment' component={ Payment } /> 
			<Route path='/login' component={ Login } /> 
			<Route path='*' component={ () => <div>404</div> } />
		</Switch>
	</Router>
}

export default App;

