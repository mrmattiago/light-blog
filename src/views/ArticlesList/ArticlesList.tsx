/** @jsx jsx */
import { jsx } from '@emotion/core'
import {FunctionComponent} from 'react';
import {articlesListContainer, articlesList} from './ArticlesList.style';

type Props = {
  articles: string[]
}

const ArticlesList: FunctionComponent<Props> = ({articles}) => {
  return (
    <ul css={articlesListContainer}>
      {articles.map((article: any, i: number) => {
        return (
          <li css={articlesList} key={i}>
            <h2><a href="/">{article.title}</a></h2>
            <time>{article.createdAt}</time>
            <p>{article.body}</p>
          </li>
        )
      })}
    </ul>
  );
}

export default ArticlesList;
