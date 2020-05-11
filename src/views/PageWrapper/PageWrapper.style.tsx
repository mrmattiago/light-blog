import { css } from '@emotion/core'

const pageWrapper = css`
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
  max-width: 1100px;
  margin: auto;
`;

export { pageWrapper, mainContent, container };
