import React, { ReactElement } from 'react';
import { Layout, Menu } from 'antd';

export default (): ReactElement => {
  return (
    <Layout.Header>
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
    </Layout.Header>
  );
};
