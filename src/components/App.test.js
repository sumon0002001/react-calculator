import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

const content = render(<BrowserRouter><Navbar /></BrowserRouter>);

test('calculator sanpshot', () => {
  expect(content.container).toMatchSnapshot();
  expect(screen.getByText('Home')).toBeInTheDocument();
});
