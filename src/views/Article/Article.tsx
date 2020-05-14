/** @jsx jsx */
import { jsx } from '@emotion/core'
import {FunctionComponent} from 'react';
import Skeleton from '../../controls/Skeleton';
import {article} from './Article.style';
// import {CONSTANTS} from '../../config/constants';

type Props = {
  articleData: {} | any,
}

const Article: FunctionComponent<Props> = ({articleData}) => {
  if(articleData.constructor === Object && Object.keys(articleData).length > 0) {
    return (
      <div css={article}>
        <h2>{articleData.title}</h2>
        <time>{new Date(articleData.createdAt).toLocaleDateString('pl-PL')}</time> by {articleData.author}
        <div dangerouslySetInnerHTML={{ __html: articleData.body }} />
      </div>
    )
  }
  return (
    <div css={article}>
      <Skeleton />
    </div>
  )
};

export default Article;
