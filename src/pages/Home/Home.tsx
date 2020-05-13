/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import {API} from '../../config/constants';
import ArticlesList from '../../views/ArticlesList';
// import Spinner from '../../controls/Spinner';

const Home = () => {  
  const [articles, setArticles] = useState([] as any);

  useEffect(() => {
    getArticlesData();
  }, []);

  const getArticlesData = async () => {
    const request = await fetch(API.ARTICLES);
    const data = await request.json();
    setArticles([...articles, ...data]);
  };

  return (
    <ArticlesList articles={articles} />
  );
};

export default Home;
