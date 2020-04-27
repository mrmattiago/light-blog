import React from 'react';
import Header from '../Header';
import { pageWrapper } from './PageWrapper.style';

type Props = {};

const PageWrapper: React.FC<Props> = (props) => {
  return (
    <div className={pageWrapper}>
      <Header name="test" />
      <main>{props.children}</main>
      <footer>footer</footer>
    </div>
  );
} 

export default PageWrapper;
