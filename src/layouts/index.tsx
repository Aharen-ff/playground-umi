import React from 'react';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

export default (props: { children: object }) => {
  return (
    <Layout>
      <Header>
        <div style={{ color: 'white' }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">页面一</Menu.Item>
            <Menu.Item key="2">页面二</Menu.Item>
            <Menu.Item key="3">页面三</Menu.Item>
          </Menu>
        </div>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <span>Footer</span>
      </Footer>
    </Layout>
  );
};
