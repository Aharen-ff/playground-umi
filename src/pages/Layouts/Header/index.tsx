import React, { ReactElement } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'umi';

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
          <Menu.Item key="1">
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="BasicTodo">待办事项</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="ContactManagement">联系人管理</Link>
          </Menu.Item>
        </Menu>
      </div>
    </Layout.Header>
  );
};
