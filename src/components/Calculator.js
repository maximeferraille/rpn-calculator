import React, { Component } from 'react';
import Screen from './Screen';
import Button from './Button';

// var entrée ' '
// var pile[]

// Méthode de calcul => appel methode entrée

// Méthode entrée => afficher le resultat calculé et / ou entré

// Méthode reset => reset le calcul

// Méthode drop => drop le dernier élément

// Méthode swap => inversé entrée précédente et présente

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input_value: '',
      values: []
    }
  }

  render() {
    return(
      <div>
        {/* Écran d'affichage
        Liste des bouttons */}
      </div>
    );
  }
}

export default Calculator;