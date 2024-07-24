import React from 'react';
import Image from '../../../components/image';
import EarthImage from './assets/earth.png';
import { ReactComponent as RocketIcon } from './assets/rocket.svg';
import './styles.scss';
import planets from './planets';

export default function Earth() {
  return (
    <div className="earth">
      <Image defaultSrc={EarthImage} alt="Earth image" />
      <div className="round">
        {planets.map((item) => <div className="planet" key={item} data-planet={item} />)}
      </div>
      <div className="rocket-wrapper">
        <RocketIcon />
      </div>
    </div>
  );
}
