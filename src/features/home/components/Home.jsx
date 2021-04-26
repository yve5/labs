import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_LINKS } from '../resources/constants';

const Home = () => (
  <div className="container">
    <h1>Labs</h1>

    <ul>
      {HOME_LINKS.map(({ href, inner, label }, index) => (
        <li key={index}>
          {inner ? (
            <Link to={href}>{label}</Link>
          ) : (
            <a href={href} target="blank">
              {label}
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Home;
