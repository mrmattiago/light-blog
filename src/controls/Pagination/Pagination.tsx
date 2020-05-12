/** @jsx jsx */
import { jsx } from '@emotion/core'
import {FunctionComponent} from 'react';
import { Pagination as PaginationMaterialUI } from '@material-ui/lab';
import {pagination} from './Pagination.style';

type Props = {
  count: number,
  page: number,
  handleChange: (event: any, value: number) => void,
};

const Pagination: FunctionComponent<Props> = ({count, page, handleChange}) => {
  return (
    <div css={pagination}>
      <PaginationMaterialUI count={count} page={page} onChange={handleChange}  shape="rounded" />
    </div>
  );
};

export default Pagination;
