import React from 'react';

type HomeProps = {
  title?: string,
};

const Home = ({title}: HomeProps) => {
    return (<div><h1>Home heading {title}</h1><br /><p>Home page</p></div>);
};

export default Home;
