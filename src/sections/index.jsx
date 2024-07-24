import React from 'react';
import Banner from './banner';
import Offers from './offers';
import './styles.scss';

export default function Sections() {
  return (
    <div className="sections">
      <Banner />
      <Offers />
    </div>
  );
}
