import React from 'react';
import PropTypes from 'prop-types';
import canSupportWebp from './helpers/can-support-webp';

export default function Image({
  alt, defaultSrc, webpSrc, sources, ...rest
}) {
  const isSupportedWebp = canSupportWebp();

  return (
    <picture>
      {sources.length !== 0 && <source srcSet={webpSrc} />}
      <img
        src={isSupportedWebp && webpSrc ? webpSrc : defaultSrc}
        alt={alt}
        {...rest}
      />
    </picture>
  );
}

Image.propTypes = {
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      mediaSize: PropTypes.number.isRequired,
      webpSrcset: PropTypes.string.isRequired,
      defaultSrcset: PropTypes.string.isRequired,
    }).isRequired,
  ),
  alt: PropTypes.string.isRequired,
  defaultSrc: PropTypes.string.isRequired,
  webpSrc: PropTypes.string,
};

Image.defaultProps = {
  sources: [],
  webpSrc: '',
};
