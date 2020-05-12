import { css } from '@emotion/core';
import {CONSTANTS} from '../../config/constants';

const footer = css`
  padding: 25px 0;
  text-align: center;
  font-size: 18px;
  background-color: #0f0e0e;
  border-top: 1px dashed #91c530;
`;

const container = css`
  max-width: ${CONSTANTS.MAX_PAGE_WIDTH};
  width: ${CONSTANTS.PAGE_WIDTH};
  margin: auto;
`;


export { footer, container };
