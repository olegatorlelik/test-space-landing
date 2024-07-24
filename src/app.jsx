import React from 'react';
import './styles.scss';
import Footer from './components/footer';
import Header from './components/header';
import Sections from './sections';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Sections />
      <Footer />
    </div>
  );
}
