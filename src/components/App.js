import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

function App() {
  return (
    <>
      <header className="App-header">
        <p>
          This is the React-Calculator
        </p>
      </header>
      <Display />
      <ButtonPanel />
    </>
  );
}

export default App;
