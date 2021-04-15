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
  this.handleClick = this.handleClick.bind(this);
  this.handleDetails = this.handleDetails.bind(this);
}

handleClick = buttonName => {
  const stateObj = this.state;
  const output = calculate(stateObj, buttonName);
  this.setState({
    total: output.total ? output.total : null,
    next: output.next ? output.next : null,
    operation: output.operation ? output.operation : null,
  })
}

handleDetails = (total, next, operation) => {
  let details = '';
  if (total !== null) {
    details +=  ` ${total}`;
  }
  if (operation !== null) {
    details += ` ${operation}`;
  }
  if (next !== null) {
    details += ` ${next}`;
  }
  return details;
}

  render() {
    const {total, next, operation} = this.state;
    return (
      <>
        <header className="App-header">
          <p>
            This is the React-Calculator
          </p>
        </header>
        <Display 
        result = {next || total || '0'}
        details={this.handleDetails(total, next, operation)}
        />
        <ButtonPanel clickHandler = {this.handleClick} />
      </>
    );

  }
  
}

export default App;
