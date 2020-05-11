/** @jsx jsx */
import { jsx } from '@emotion/core'
import React from 'react';
import {header, container} from './Header.style';

type Props = {
  name?: string
}

const Header: React.FC<Props> = (props) => {
  return <header css={header}>
    <div css={container}>Frontend community technology blog</div>
  </header>;
}

export default Header;
