import PropTypes from 'prop-types';
import React from 'react';
import './styles.scss';

export default function Button({ title, kind, ...rest }) {
  return (
    <button className="button" type="button" {...rest} data-kind={kind}>
      <span className="text">{title}</span>
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  kind: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  kind: 'primary',
};
