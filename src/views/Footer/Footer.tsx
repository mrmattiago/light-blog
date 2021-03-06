/** @jsx jsx */
import { jsx } from '@emotion/core'
import {FunctionComponent} from 'react';
import {footer, container} from './Footer.style';

type Props = {}

const Footer: FunctionComponent<Props> = (props) => {
  return (
    <footer css={footer}>
      <div css={container}>&copy; Light Blog 2020 by <a href="mailto:mateusz.jach@gmail.com">Mat</a></div>
    </footer>
  );
}

export default Footer;
