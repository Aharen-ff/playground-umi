import React, { ReactElement } from 'react';
import styles from './index.less';

export default (): ReactElement => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
};
