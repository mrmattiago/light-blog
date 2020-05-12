/** @jsx jsx */
import { jsx } from '@emotion/core'
import {FunctionComponent} from 'react';
import {Link} from "react-router-dom";
import {menu, container} from './Menu.style';
import {MENU} from '../../config/constants';

type Props = {};

const Menu: FunctionComponent<Props> = (props) => {
  return (
    <menu css={menu}>
      <ul css={container}>
        {MENU.map((item, i) => {
          return (<li key={i}><Link to={item.path}>{item.title}</Link></li>)
        })}
      </ul>
    </menu>
  );
}

export default Menu;
