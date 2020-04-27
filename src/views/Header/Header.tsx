import React from 'react';
// import styles from './Header.style';

type Props = {
  name: string
}

const Header: React.FC<Props> = (props) => {
  return <header>header {props.name}</header>;
}

export default Header;
