/** @jsx jsx */
import { jsx } from '@emotion/core'
import {FunctionComponent} from 'react';
import {menu, container} from './Menu.style';

type Props = {};

const Menu: FunctionComponent<Props> = (props) => {
  return (
    <menu css={menu}>
      <ul css={container}>
        <li>Home</li>
        <li>Past articles</li>
        <li>About Author</li>
      </ul>
    </menu>
  );
}

export default Menu;
