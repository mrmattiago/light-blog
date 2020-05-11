/** @jsx jsx */
import { jsx } from '@emotion/core'
import {FunctionComponent} from 'react';
import {header, container} from './Header.style';

type Props = {
  name?: string
}

const Header: FunctionComponent<Props> = (props) => {
  return <header css={header}>
    <div css={container}>Frontend community technology blog</div>
  </header>;
}

export default Header;
