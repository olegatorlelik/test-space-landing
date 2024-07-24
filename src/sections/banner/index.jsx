import React from 'react';
import Button from '../../components/button';
import Image from '../../components/image';
import BannerImage from './assets/banner.png';
import './styles.scss';
import Earth from './earth';

export default function Banner() {
  return (
    <section className="banner">
      <Image defaultSrc={BannerImage} alt="Space banner" className="image" />
      <div className="wrapper">
        <div className="content">
          <h1 className="title">
            Discover the vast expanses of
            <span> space</span>
          </h1>
          <p className="description">
            Where the possibilities are
            <span> endless!</span>
          </p>
          <Button title="Learn more" />
        </div>
        <Earth />
      </div>
    </section>
  );
}
