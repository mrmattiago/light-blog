import React from 'react';

type HomeProps = {
  title?: string,
};

const Home = ({title}: HomeProps) => {  
  return (
    <div>
      <h1>Home heading {title}</h1>
    </div>
  );
};

export default Home;
