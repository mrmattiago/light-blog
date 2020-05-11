/** @jsx jsx */
import { jsx } from '@emotion/core'
import { FunctionComponent } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {pageWrapper, mainContent, container} from './PageWrapper.style';

type Props = {};

const PageWrapper: FunctionComponent<Props> = (props) => {
  return (
    <div css={pageWrapper}>
      <Header />
      <div css={mainContent}>
      <div css={container}>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
} 

export default PageWrapper;
