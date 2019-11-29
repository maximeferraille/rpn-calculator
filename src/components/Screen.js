import React, { Component } from 'react';

class Screen extends Component {
  render() {
    return(
      <div className='display'>
        <ul className="list-stack">
          <li className="actuelle">{this.props.current_value}</li>
          {this.props.historic.map((value, index) => {
            return <li key={index} className="historic">{value}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Screen;