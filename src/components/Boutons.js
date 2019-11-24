import React, { Component } from 'react';

class Bouton extends Component {
  	// Affichage d'un bouton qui prend une valeur dynamique

    render() {
	  return (
	    <div className="buttons">
	      <button 
	        type="button"
	        className="btn"
	        onClick={this.props.click}>
	        {this.props.symbol}
	      </button>
	    </div>
	  );
	}
};

export default Bouton;