import React, { ReactElement } from 'react';
import { Layout } from 'antd';

import MyHeader from './Header';
import MyFooter from './Footer';

export default (props: { children: React.ReactNode }): ReactElement => {
  return (
    <Layout>
      <MyHeader />
      <Layout.Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {props.children}
        </div>
      </Layout.Content>
      <MyFooter />
    </Layout>
  );
};
