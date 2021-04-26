import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_URL } from '../../home/resources/constants';

const Ooops = () => (
  <div className="container">
    <Link className="container__nav" to={HOME_URL}>
      Back to home
    </Link>

    <h1>Ooops!!!</h1>

    <p>This page does not exist...</p>
  </div>
);

export default Ooops;
