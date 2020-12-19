import React, { ReactElement } from 'react';
import { Layout } from 'antd';

export default (): ReactElement => {
  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      <span>Footer</span>
    </Layout.Footer>
  );
};
