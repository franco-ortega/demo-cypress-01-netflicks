import React from 'react';
import '../../index.css';

const Fun = ({ propsValue }) => {
  return (
    <div className='funClass'>
      <h1>Fun</h1>
      <p>{propsValue}</p>
    </div>
  );
};

export default Fun;
