import React, { Component } from 'react';

class Screen extends Component {
  render() {
    return(
      <div className={'display'}>
        <ul className="list-stack">
          {this.props.historic.map((value, index) => {
            return <li key={index} className="historic">{value}</li>
          })}
          <li>{this.props.current_value}</li>
        </ul>
      </div>
    )
  }
}

export default Screen;