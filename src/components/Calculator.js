import React, { Component } from 'react';
import Screen from './Screen';
import Keypad from './Keypad';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_value: '0',
      input_value: '',
      stack: []
    }
  }

  appendToDisplay = (newNumber) => {
    var newValue = this.state.display_value;

    if (newValue === '0') {
      newValue = newNumber;
    } else {
      newValue += newNumber;
    }

    this.setState({display_value: newValue});
  }

  addToStack = (number) => {
    var new_stack = this.state.stack;

    new_stack.unshift(number);
    this.setState({ stack: new_stack });
  }
  clearDisplay = () => {
    this.setState({display_value: '0'});
  }
  clearAll = () => {
    this.setState({display_value: '0', stack: []});
  }
  isFreshDisplay = () => {
    return this.state.display_value === '0';
  }
  hasTwoItems = () => {
    return (!this.isFreshDisplay() && this.state.stack.length > 0) || this.state.stack.length > 1;
  }
  flashError = (input_value) => {
    this.setState({
      input_value: input_value
    });
    console.error('ERROR: ' + input_value);
  }
  clearInputValue = () => {
    this.setState({
      input_value: ''
    });
  }
  getTwoNumbers = () => {
    var new_stack = this.state.stack,
        first,
        second;

    if (this.state.display_value !== '0') {
      second = this.state.display_value;
    } else {
      second = new_stack.shift();
    }

    first = new_stack.shift();

    this.setState({ stack: new_stack });

    return [first, second];
  }
  doMultiply = (numbers) => {
    let new_display_value = parseFloat(numbers[0]) * parseFloat(numbers[1]);
    this.setState({display_value: new_display_value});
  }
  doDivide = (numbers) => {
    let new_display_value = parseFloat(numbers[0]) / parseFloat(numbers[1]);
    this.setState({display_value: new_display_value});
  }
  doAdd = (numbers) => {
    let new_display_value = parseFloat(numbers[0]) + parseFloat(numbers[1]);
    this.setState({display_value: new_display_value});
  }

  doSubtract = (numbers) => {
    let new_display_value = parseFloat(numbers[0]) - parseFloat(numbers[1]);
    this.setState({display_value: new_display_value});
  }
  doSwap = () => {
    /*var new_stack = this.state.stack;
    [new_stack[new_stack.length-1],new_stack[new_stack.length-2]] = [new_stack[new_stack.length-2],new_stack[new_stack.length-1]]; 
    this.setState({ stack: new_stack });*/
    if(this.state.stack.length > 0){
      var swapValue = this.state.stack[this.state.stack.length-1];
      var new_stack = this.state.stack;
      new_stack[this.state.stack.length-1] = this.state.display_value;
      this.setState({display_value: swapValue});
      this.setState({ stack: new_stack });
    }
    else{
      console.log("You need more numbers");
    }

  }
  doDrop = () => {
    if(this.state.stack.length > 0){
      this.state.stack.shift();
    }
    else{
      this.clearDisplay();
    }
  }
  doSignChange= () => {
    this.setState({display_value: -1*this.state.display_value});
  }

  performOperation = (operator) => {
    this.clearInputValue();

    switch(operator) {
      case 'clearall':
        this.clearAll();
        return;
      case 'change':
        this.doSignChange();
        return;
      case 'drop':
        this.doDrop();
        return;
      case 'clear':
        this.clearDisplay();
        return;
      case 'swap':
        this.doSwap();
        return;
      case 'stack':
        this.addToStack(this.state.display_value);
        this.clearDisplay();
        return;
    }

    // Gestion des opérations necessitant deux valeurs dans la pile
    var numbers;

    if (this.hasTwoItems()) {
      numbers = this.getTwoNumbers();

      switch(operator) {
        case 'add':
          this.doAdd(numbers);
          break;
        case 'subtract':
          this.doSubtract(numbers);
          break;
        case 'multiply':
          this.doMultiply(numbers);
          break;
        case 'divide':
          this.doDivide(numbers);
          break;
        default:
          this.flashError('Unsupported operation');
          break;
      }
    } else {
      this.flashError('We need more numbers');
    }
  }
  /* Écran d'affichage
  Liste des bouttons */
  render() {
    return(
      <div className="calculator">
        <Screen current_value={this.state.display_value} historic={this.state.stack}/>
        <Keypad performOperation={this.performOperation} appendToDisplay={this.appendToDisplay} />
      </div>
    );
  }
}

export default Calculator;