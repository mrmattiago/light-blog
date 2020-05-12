import { css } from '@emotion/core';
import {COLORS} from '../../config/constants';

const articlesListContainer = css`
  margin-left: -40px;
`;

const articlesList = css`
  list-style: none;
  line-height: 1.4;
  display: list-item;
  margin: 50px 0;

  h2 {
    font-size: 24px;
    line-height: 34px;
    letter-spacing: -0.03em;

    a {
      color: ${COLORS.LIGHT_GREY};
      text-decoration-skip-ink: unset;
    }

    &:before {
      content: "/";
      font-size: 26px;
      color: ${COLORS.GREEN};
      margin-left: -17px;
      margin-right 2px;
      line-height: 16px;
    }
  }
  time {
    font-size: 16px;
    line-height: 1.4;
  }
  p {
    font-size: 16px;
    line-height: 1.4;
  }
`;


export { articlesListContainer, articlesList };
