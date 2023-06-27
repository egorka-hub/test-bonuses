import React from "react";

import styles from './index.module.scss';

function Container({ children }: {children: React.ReactElement | React.ReactElement[]}) {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}
export default Container;
