import React from 'react';
import '../App.css';

function Title() {
  return (
  /* eslint-disable global-require */
    <img id="logo" src={ require('../images/logo.png') } alt="title" />
  /* eslint-enable global-require */
  );
}

export default Title;
