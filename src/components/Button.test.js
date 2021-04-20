import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import renderer from 'react-test-renderer';

it('Renders the Button page', () => {
    const button = renderer
      .create(<Button />)
      .toJSON();
    expect(button).toMatchSnapshot();
  });