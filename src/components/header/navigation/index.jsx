import React from 'react';
import Burger from './burger';
import links from './links';
import './styles.scss';
import { ReactComponent as Bin } from './assets/bin.svg';

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="links">
        {links.map((link) => (
          <div className="link-wrapper" key={link} data-text={link}>
            <a className="link" key={link} href={`#${link}`}>{link}</a>
          </div>
        ))}
        <button type="button" aria-label="bin" className="bin">
          <Bin />
        </button>
      </div>
      <Burger />
    </nav>
  );
}
