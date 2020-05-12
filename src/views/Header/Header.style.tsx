import { css, keyframes } from '@emotion/core';
import {CONSTANTS} from '../../config/constants';

const blink = keyframes`
  0%{opacity: 0;}
  100%{opacity: 1;}
`

const header = css`
  padding: 40px 0;
  font-size: 30px;
  background-color: #0f0e0e;
  border-bottom: 1px dashed #91c530;

  h1 {
    font-size: 30px;
    line-height: 1.5;
    font-weight: bold;
    display: inline-block;
    letter-spacing: 3px;

    &:after {
      content: "";
      animation: ${blink} 700ms linear infinite alternate;
      border-left: 3px solid #b5e853;
    }
  }

  p {
    font-size: 18px;
    font-weight: 300;
  }
`;

const container = css`
  max-width: ${CONSTANTS.MAX_PAGE_WIDTH};
  width: ${CONSTANTS.PAGE_WIDTH};
  margin: auto;

  ::before {
    letter-spacing: -1px;
    content: '~/$';
    font-size: 24px;
    display: inline-block;
    margin-left: -50px;
    margin-right: 10px;
    color: #b5e853;
  }
`;

export { header, container };
