/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {API} from '../../config/constants';
import ArticleView from '../../views/Article';

const Article = (props: any) => {  
  const [articleData, setArticleData] = useState({} as any);

  useEffect(() => {
    getArticleData();
  }, []);

  const getArticleData = async () => {
    const {articleId} = props.match.params;
    const request = await fetch(`${API.ARTICLE}/${articleId}`);
    const data = await request.json();
    setArticleData({...articleData, ...data});
  };

  return (
    <ArticleView articleData={articleData} />
  );
};

export default Article;
