import React from 'react';
import Done from './Done';

describe('<Done />', () => {
  it('renders when done', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Done done={true} />);
  });

  it('renders when not done', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Done done={false} />);
  });
});
