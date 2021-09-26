import React       from 'react';
import {Component} from 'react';


export class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    //this.operate = this.operate.bind(this); | without lambdas
  }

  operate(op) {
    this.setState({
      counter:
        op === '+'? this.state.counter + 1 :
        op === '-'? this.state.counter - 1 :
          this.state.counter
    });
    console.log(op, this.state.counter);
  }

  render() {
    return (
      <div>
        <h2>Events with class components</h2>
        <nav>
          <button onClick={() => this.operate('+')}>+</button>
          <button onClick={() => this.operate('-')}>-</button>
          <button onClick={() => this.operate('*')}>*</button>
          <button onClick={() => this.operate('/')}>/</button>
        </nav>
      </div>
    );
  }
}