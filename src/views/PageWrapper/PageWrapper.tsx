/** @jsx jsx */
import { jsx } from '@emotion/core'
import { FunctionComponent } from 'react';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Header from '../Header';
import Footer from '../Footer';
import Menu from '../Menu';
import {pageWrapper, mainContent, container} from './PageWrapper.style';

const materialDarkTheme = createMuiTheme({
  palette: {
    type: "dark",
  }
});

type Props = {};

const PageWrapper: FunctionComponent<Props> = (props) => {
  return (
    <MuiThemeProvider theme={materialDarkTheme}>
    <div css={pageWrapper}>
      <Header />
      <Menu />
      <div css={mainContent}>
        <div css={container}>{props.children}</div>
      </div>
      <Footer />
    </div>
    </MuiThemeProvider>
  );
} 

export default PageWrapper;
