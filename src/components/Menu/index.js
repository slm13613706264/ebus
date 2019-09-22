import React, { Component } from 'react';
import { Link } from "react-router-dom"

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Router from '../../router'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class SiderDemo extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        defaultSelectedKeys={['eventsearch']}
                        mode="inline"
                        defaultOpenKeys={['event']}
                    >
                        <SubMenu
                            key="event"
                            title={
                                <span>
                                    <Icon type="user" />
                                    <span>事件</span>
                                </span>
                            }
                        >
                            <Menu.Item key="eventsearch">

                                <Link to="/eventsearch"> 事件搜索</Link>
                            </Menu.Item>
                            <Menu.Item key="eventmanage">
                                <Link to="/eventmanage"> 事件管理</Link>
                            </Menu.Item>
                            <Menu.Item key="attrmanage">
                                <Link to="/attrmanage"> 属性管理</Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            <Router />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}

