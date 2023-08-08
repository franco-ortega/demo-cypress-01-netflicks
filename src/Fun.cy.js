import React from 'react';
import Fun from './Fun';

describe('<Fun />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Fun propsValue={'Hello funster!'} />);
  });
});
