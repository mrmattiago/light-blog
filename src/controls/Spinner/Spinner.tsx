/** @jsx jsx */
import { jsx } from '@emotion/core'
import {FunctionComponent} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {spinner} from './Spinner.style';

type Props = {};

const Spinner: FunctionComponent<Props> = (props) => {
  return (
    <div css={spinner}>
      <CircularProgress />
    </div>
  );
};

export default Spinner;
