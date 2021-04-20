import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home';

it('Renders the Home page', () => {
  const home = renderer
    .create(<Home />)
    .toJSON();
  expect(home).toMatchSnapshot();
});
