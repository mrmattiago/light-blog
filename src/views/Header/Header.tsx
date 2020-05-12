/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, {FunctionComponent, useEffect} from 'react';
import {header, container} from './Header.style';
import {CONSTANTS} from '../../config/constants';

type Props = {}

const randomIntFromRange = (min: number, max: number) => {
  return Math.floor(Math.random() *  (max - min + 1) + min);
};

const Header: FunctionComponent<Props> = (props) => {
  const mainHeadingToAnimateType = React.createRef<HTMLHeadingElement>()
  const typing = () => {
    const textToAnimate = CONSTANTS.TEXT_TO_TYPE_IN_ANIMATION;
    let i = 0;
    function typeWriter() {
      if(i< textToAnimate.length && mainHeadingToAnimateType.current !== null){
        mainHeadingToAnimateType.current.innerHTML += textToAnimate.charAt(i);
        i++;
        setTimeout(typeWriter, randomIntFromRange(10, 300));
      }
    }
    typeWriter();
  }

  useEffect(() => {
    typing();
  });

  return (
    <header css={header}>
      <div css={container}>
        <h1 ref={mainHeadingToAnimateType}> </h1>
        <p>{CONSTANTS.HEADING_PARAGRAPH}</p>
      </div>
    </header>
  );
}

export default Header;
