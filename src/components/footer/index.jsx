import React from 'react';
import './styles.scss';
import { ReactComponent as RocketIcon } from './assets/rocket.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <RocketIcon />
      <p>Exciting space adventure!</p>
    </footer>
  );
}
