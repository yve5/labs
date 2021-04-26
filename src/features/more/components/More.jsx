import React from 'react';
import { Link } from 'react-router-dom';
import { MORE_LINKS } from '../resources/constants';
import { HOME_URL } from '../../home/resources/constants';

const More = () => (
  <div className="container">
    <Link className="container__nav" to={HOME_URL}>
      Back to home
    </Link>

    <h1>More...</h1>

    <ul>
      {MORE_LINKS.map(({ href, label }, index) => (
        <li key={index}>
          <a href={href} target="blank">
            {label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default More;
