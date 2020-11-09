import React, { useEffect } from 'react'
import { Layout, Menu } from 'antd';
import { Route, Link, Redirect } from 'react-router-dom'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
const { Sider, Content } = Layout;

const Con = (props)=>{
    return <div>
        <h1>
            {props.match.params.item}
        </h1>
    </div>
}

const MyCourse = (props) => {
    return (
        <Layout style={{height:document.documentElement.clientHeight-50}}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
            >
                <Menu theme="dark" mode="inline" defaultSelectedKeys={ ['1'] }>
                    <Menu.Item key="1" icon={ <UserOutlined /> }>
                        <Link to='/mycourse/user'>Profile</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={ <VideoCameraOutlined /> }>
                        <Link to='/mycourse/course'>My Course</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={ <UploadOutlined /> }>
                        <Link to='/mycourse/test'>My Test</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content style={ { margin: '10px 16px 0' } }>
                    <div className="site-layout-background">
                        <Route path='/mycourse/:item' component={Con}/>
                        <Redirect to='/mycourse/user'/>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default MyCourse;

