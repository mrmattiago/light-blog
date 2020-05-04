/** @jsx jsx */
import { jsx } from '@emotion/core'
import { FunctionComponent } from 'react';
import Header from '../Header';
import { pageWrapper } from './PageWrapper.style';

type Props = {};

const PageWrapper: FunctionComponent<Props> = (props) => {
  return (
    <div css={pageWrapper}>
      <Header name="test" />
      <main>{props.children}</main>
      <footer>footer</footer>
    </div>
  );
} 

export default PageWrapper;
