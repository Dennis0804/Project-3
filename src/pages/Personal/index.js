import React from 'react'
import { Layout, Menu } from 'antd';
import {Route, Link, Redirect} from 'react-router-dom'
import MyCourse from './components/MyCourse';
const { Sider, Content } = Layout;

const Con = (props)=>{
    return <div>
        <h1>
            {props.match.params.item}
        </h1>
    </div>
}

const Personal = (props) => {
    return (
        <Layout style={{height:document.documentElement.clientHeight-50}}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
            >
                <Menu theme="dark" mode="inline" defaultSelectedKeys={ ['2'] }>
                    <Menu.Item key="1">
                        <Link to='/personal/profile'>Profile</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/personal/mycourse'>My Course</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='/personal/test'>My Test</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to='/personal/assignment'>My Assignment</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to='/personal/payment'>Payment</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content style={ { margin: '10px 16px 0' } }>
                    <div className="site-layout-background">
                        <Route path='/personal/mycourse' component={MyCourse}/>
                        <Route path='/personal/:item' component={Con}/>
                        <Redirect to='/personal/mycourse'/>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Personal;

