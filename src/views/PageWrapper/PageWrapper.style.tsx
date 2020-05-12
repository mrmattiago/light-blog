import { css } from '@emotion/core'
import {CONSTANTS} from '../../config/constants';

const pageWrapper = css`
  font-family: 'Monaco', sans-serif;
  color: #d6d8da;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const mainContent = css`
  flex: 1;
  background-color: #191717;
`;

const container = css`
  max-width: ${CONSTANTS.MAX_PAGE_WIDTH};
  width: ${CONSTANTS.PAGE_WIDTH};
  margin: auto;
`;

export { pageWrapper, mainContent, container };
