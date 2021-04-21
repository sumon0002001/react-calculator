import React from 'react';
import renderer from 'react-test-renderer';
import Quete from './Quete';

it('Renders the Quote page', () => {
  const quete = renderer
    .create(<Quete />)
    .toJSON();
  expect(quete).toMatchSnapshot();
});
