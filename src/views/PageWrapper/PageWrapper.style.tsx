import { css } from '@emotion/core'
import {CONSTANTS, COLORS} from '../../config/constants';

const pageWrapper = css`
  font-family: 'Monaco', sans-serif;
  color: ${COLORS.LIGHT_GREY};
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
  margin: 50px auto;

  a {
    text-decoration: none;
    color: ${COLORS.LIGHT_GREY};

    &:hover, :active {
      color: ${COLORS.WHITE};
      font-weight: bold;
    }
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }
`;

export { pageWrapper, mainContent, container };
