/** @jsx jsx */
import { jsx } from '@emotion/core'
import {FunctionComponent} from 'react';
import { Skeleton as SkeletonMaterialUI } from '@material-ui/lab';
import {skeleton} from './Skeleton.style';

type Props = {};

const Skeleton: FunctionComponent<Props> = (props) => {
  return (
    <div css={skeleton}>
      <SkeletonMaterialUI animation="wave" variant="rect" width={400} height={35} />
      <SkeletonMaterialUI animation="wave" variant="text" width={200} />
      <SkeletonMaterialUI animation="wave" variant="rect" width={600} height={70} />
    </div>
  );
};

export default Skeleton;
