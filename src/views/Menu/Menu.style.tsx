import { css } from '@emotion/core';
import {CONSTANTS, COLORS} from '../../config/constants';

const menu = css`
  padding: 15px 0;
  min-height: 52px;
  margin: 0;
  background-color: ${COLORS.MENU_BACKGROUND};
  border-bottom: 1px dashed ${COLORS.GREEN};
  font-size: 18px;

  li {
    font-size: 16px;
    margin-left: 15px;
    padding-right: 15px;
    border-right: 1px dashed ${COLORS.GREEN};

    a {
      text-decoration: none;
      color: ${COLORS.LIGHT_GREY};

      &:hover, :active {
        color: ${COLORS.WHITE};
        font-weight: bold;
      }
    }

    &:first-of-type {
      border-left: 1px dashed ${COLORS.GREEN};
      padding-left: 15px;
    }
  }
`;

const container = css`
  max-width: ${CONSTANTS.MAX_PAGE_WIDTH};
  width: ${CONSTANTS.PAGE_WIDTH};
  margin: auto;

  list-style-type: none;
  display: flex;
  justify-content: flex-end;
`;

export { menu, container };
