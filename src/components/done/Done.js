import React from 'react';

function Done({ done }) {
  return <>{done ? 'You are done' : 'Not done yet.'}</>;
}

export default Done;
