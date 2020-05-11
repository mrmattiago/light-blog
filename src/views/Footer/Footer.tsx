/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import {footer, container} from './Footer.style';

type Props = {}

const Footer: React.FC<Props> = (props) => {
  return <footer css={footer}>
    <div css={container}>&copy; Light Blog 2020</div>
  </footer>;
}

export default Footer;
