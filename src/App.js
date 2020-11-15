import React from 'react';
import {HashRouter as Router,Redirect,Route,NavLink,Switch} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Personal from './pages/Personal'
import Pay from './pages/Pay';
import './app.less'
import Video from './pages/Video';
import DoTest from './pages/Video/components/DoTest';
import DoAssignment from './pages/Video/components/DoAssignment';

const App = ()=>{
	return <Router>
		<Header />
		<Switch>
			<Route exact path='/' component={ Home } />
			<Route path='/personal' component={ Personal } /> 
			<Route path='/pay' component={ Pay } /> 
			<Route path='/video' component={ Video } /> 
			<Route path='/dotest' component={ DoTest } /> 
			<Route path='/doassignment' component={ DoAssignment } /> 
			<Route path='*' component={ () => <div>404</div> } />
		</Switch>
		<Footer />
	</Router>
}

export default App;

