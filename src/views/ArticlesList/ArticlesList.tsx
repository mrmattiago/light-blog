/** @jsx jsx */
import { jsx } from '@emotion/core'
import {FunctionComponent, useState} from 'react';
import {Link} from "react-router-dom";
import Skeleton from '../../controls/Skeleton';
import Pagination from '../../controls/Pagination';
import {articlesListContainer, articlesList} from './ArticlesList.style';
import {CONSTANTS} from '../../config/constants';

type Props = {
  articles: string[],
}

const ArticlesList: FunctionComponent<Props> = ({articles}) => {

  const [page, setPage] = useState(1);

  let articlesItems = articles;
  if(articlesItems.length > 5) {
    articlesItems = articles.slice((page - 1) * CONSTANTS.ELEMENTS_PER_PAGE, page * CONSTANTS.ELEMENTS_PER_PAGE);
  }
  
  const countPages = (allItems: number) => {
    return Math.ceil(allItems/CONSTANTS.ELEMENTS_PER_PAGE);
  };

  const getFirstNumberOfWords = (string: string, number:  number) => {
    return string.split(" ").splice(0, number).join(" ");
}

  const buildListItem = (items: string[]) => {
    return (
      <ul css={articlesListContainer}>
        {items.map((article: any, i: number) => {
          if(article.constructor === Object) {
            return (
              <li css={articlesList} key={i}>
                <h2>
                  <Link to={`/article/${article.articleId}`}>{article.title}</Link>
                </h2>
                <time>{new Date(article.createdAt).toLocaleDateString('pl-PL')}</time> by {article.author}
                <div dangerouslySetInnerHTML={{ __html: `${getFirstNumberOfWords(article.body, 40)} ...` }} />
              </li>
            )
          }
          return (
            <li css={articlesList} key={i}>
              <Skeleton />
            </li>
          )
        })}
      </ul>
    );
  };

  const handleChange = (event: any, value: number) => {
    setPage(value);
  };

  return (
    <div>
      {articles.length === 0 && (buildListItem(["","","","",""]))}
      {articles.length > 0 && (buildListItem(articlesItems))}
      {articles.length > 5 && (<Pagination count={countPages(articles.length)} page={page} handleChange={handleChange} />)}
    </div>
  );
}

export default ArticlesList;
