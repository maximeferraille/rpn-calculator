import React, { Component } from 'react';
import Screen from './Screen';
import Bouton from './Boutons';

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
  /* Écran d'affichage
  Liste des bouttons */
  render() {
    return(
      <div className="calculator">
        <div className="keyboard">
          <Bouton symbol="1" click="this.afficher(1)"/>
          <Bouton symbol="2" click="this.afficher(2)"/>
          <Bouton symbol="3" click="this.afficher(3)"/>
          <Bouton symbol="4" click="this.afficher(4)"/>
          <Bouton symbol="5" click="this.afficher(5)"/>
          <Bouton symbol="6" click="this.afficher(6)"/>
          <Bouton symbol="7" click="this.afficher(7)"/>
          <Bouton symbol="8" click="this.afficher(8)"/>
          <Bouton symbol="9" click="this.afficher(9)"/>
          <Bouton symbol="+" click="this.additionner()"/>
          <Bouton symbol="-" click="this.soustraire()"/>
          <Bouton symbol="*" click="this.multiplier()"/>
          <Bouton symbol="/" click="this.diviser()"/>
          <Bouton symbol="C" click="this.cancel()"/>
          <Bouton symbol="AC" click="this.delete()"/>
          <Bouton symbol="SWAP" click="this.swap()"/>
          <Bouton symbol="ENTER" click="this.enter()"/>
          <Bouton symbol="DROP" click="this.drop()"/>
        </div>
      </div>
    );
  }
}

export default Calculator;