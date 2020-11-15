import React, { useEffect } from 'react'
import { Layout, Menu } from 'antd';
import {Route, Link, Redirect} from 'react-router-dom'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import MyCourse from './components/MyCourse';
import Profile from './components/Profile';
import Payment from './components/Payment';
import Assignment from './components/Assignment';
import Test from './components/Test';
const { Sider, Content } = Layout;


const Personal = (props) => {
    return (
        <Layout style={{height:document.documentElement.clientHeight-50}}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
            >
                <Menu theme="dark" mode="inline" defaultSelectedKeys={ ['1'] }>
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
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <Route path='/personal/profile' component={Profile}/>
                        <Route path='/personal/mycourse' component={MyCourse}/>
                        <Route path='/personal/payment' component={Payment}/>
                        <Route path='/personal/assignment' component={Assignment}/>
                        <Route path='/personal/test' component={Test}/>
                        <Redirect to='/personal/profile'/>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default Personal;

