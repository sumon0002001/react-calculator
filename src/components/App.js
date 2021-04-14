import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <React.Fragment>
      <header className="App-header">
        <p>
          This is the React-Calculator
        </p>
      </header>
      <Display />
      <ButtonPanel />
      </React.Fragment>
  );
}

export default App;
