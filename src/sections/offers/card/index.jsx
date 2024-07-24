import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../../components/button';
import Image from '../../../components/image';
import './styles.scss';

export default function Card({
  title, description, image, isFullSize,
}) {
  return (
    <div className="card" data-full-size={isFullSize}>
      <div className="content">
        <h5 className="title">{title}</h5>
        <p className="description">{description}</p>
        <Button title="Read more" kind="secondary" />
      </div>
      <Image defaultSrc={image} alt={title} />
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isFullSize: PropTypes.bool,
};

Card.defaultProps = {
  isFullSize: false,
};
