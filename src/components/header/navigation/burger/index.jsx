import React from 'react';
import './styles.scss';

const checkBoxId = 'burger-toggle';

export default function Burger() {
  return (
    <label className="burger" htmlFor={checkBoxId}>
      <input type="checkbox" id={checkBoxId} />
      <div className="lines">
        <span />
        <span />
        <span />
      </div>
    </label>
  );
}
