import { css } from '@emotion/core';
import {COLORS} from '../../config/constants';

const article = css`
  line-height: 1.4;
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
      margin-left: -20px;
      margin-right 5px;
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

  div {
    p {
      line-height: 1.5;
    }
    li {
      line-height: 1.6;
    }
    code {
      background-color: rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.2);
      padding: 1px 4px;
      color: #aa758e;
      border-radius: 2px;
      font-size: 16px;
      line-height: 1.4;
    }
  }
`;


export { article };
