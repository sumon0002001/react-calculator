import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
  };
}
  render() {
    return (
      <>
        <header className="App-header">
          <p>
            This is the React-Calculator
          </p>
        </header>
        <Display 
        result = {next || total || '0'}
        details={}
        />
        <ButtonPanel />
      </>
    );

  }
  
}

export default App;
