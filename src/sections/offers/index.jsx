import React from 'react';
import Card from './card';
import data from './data';
import './styles.scss';
import Quote from './quote';

export default function Offers() {
  return (
    <div className="offers">
      <div className="wrapper">
        <h3>Offers</h3>
        {data.map(({ description, image, title }, index) => (
          <Card
            key={title}
            image={image}
            description={description}
            title={title}
            isFullSize={index === 0 || index === data.length - 1}
          />
        ))}
        <Quote />
      </div>
    </div>
  );
}
