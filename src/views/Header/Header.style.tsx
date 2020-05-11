import { css } from '@emotion/core';

const header = css`
  padding: 50px 0;
  font-size: 30px;
  background-color: #0f0e0e;
`;

const container = css`
  max-width: 1100px;
  margin: auto;

  ::before {
    content: '~_>';
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    margin-left: -48px;
  }
`;

export { header, container };
