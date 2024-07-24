import React from 'react';
import './styles.scss';
import { ReactComponent as Logo } from './assets/logo.svg';
import Navigation from './navigation';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <a className="logo" href="/" aria-label="homepage">
          <Logo />
        </a>
        <Navigation />
      </div>
    </header>
  );
}
