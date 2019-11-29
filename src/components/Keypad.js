import React, { Component } from 'react';

class Keypad extends Component {
  appendToDisplay = (label) => {
    this.props.appendToDisplay(label);
  }
  performOperation = (operator) => {
    this.props.performOperation(operator);
  }

  render() {
    return(
      <div className="keyboard">
        <div>
          <button onClick={this.performOperation.bind(this,'clearall')}>CLR</button>
          <button onClick={this.performOperation.bind(this,'clear')}>C</button>
          <button onClick={this.performOperation.bind(this,'change')}>+/-</button>
          <button onClick={this.performOperation.bind(this,'swap')}>SWAP</button>
        </div>
        <div>
          <button onClick={this.appendToDisplay.bind(this,'7')}>7</button>
          <button onClick={this.appendToDisplay.bind(this,'8')}>8</button>
          <button onClick={this.appendToDisplay.bind(this,'9')}>9</button>
          <button onClick={this.performOperation.bind(this,'divide')}>/</button>
        </div>
        <div>
          <button onClick={this.appendToDisplay.bind(this,'4')}>4</button>
          <button onClick={this.appendToDisplay.bind(this,'5')}>5</button>
          <button onClick={this.appendToDisplay.bind(this,'6')}>6</button>
          <button onClick={this.performOperation.bind(this,'multiply')}>*</button>
        </div>
        <div>
          <button onClick={this.appendToDisplay.bind(this,'1')}>1</button>
          <button onClick={this.appendToDisplay.bind(this,'2')}>2</button>
          <button onClick={this.appendToDisplay.bind(this,'3')}>3</button>
          <button onClick={this.performOperation.bind(this,'subtract')}>-</button>
        </div>
        <div>
          <button onClick={this.appendToDisplay.bind(this,'.')}>.</button>
          <button onClick={this.appendToDisplay.bind(this,'0')}>0</button>
          <button onClick={this.performOperation.bind(this,'stack')}>ENTER</button>
          <button onClick={this.performOperation.bind(this,'add')}>+</button>
        </div>
        <div>
        <button onClick={this.performOperation.bind(this,'drop')}>DROP</button>
        </div>
      </div>
    );
  }
}

export default Keypad;