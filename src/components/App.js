import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
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

  handleClick = (buttonName) => {
    const stateObj = this.state;
    const output = calculate(stateObj, buttonName);
    this.setState({
      total: output.total ? output.total : null,
      next: output.next ? output.next : null,
      operation: output.operation ? output.operation : null,
    });
  }

  handleDetails = (total, next, operation) => {
    let details = '';
    if (total !== null) {
      details += ` ${total}`;
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
    const { total, next, operation } = this.state;
    return (
      <>
       <h1>Let&apos;s do some Math!</h1>
        <main className="main">
         
          <Display
            result={next || total}
            details={this.handleDetails(total, next, operation)}
          />
          <ButtonPanel clickHandler={this.handleClick} />
        </main>
      </>
    );
  }
}

export default App;
