import React from 'react';

const About = () => {
  const link = 'https://nenadstojkovic.github.io/';
  return (
    <div className='about'>
      <img
        src='https://blog.smartcat.io/content/images/2020/04/logo-smartcat.svg'
        alt='logo-smartcat'
      />
      <h2>Pharmacy App</h2>
      <h3>version 1.0</h3>
      <h3>
        Author: <a href={link}>Nenad Stojković</a>
      </h3>
    </div>
  );
};

export default About;
