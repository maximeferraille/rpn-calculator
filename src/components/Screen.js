import React, { Component } from 'react';

class Screen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={'display'}>
        <ul className="list-stack">
          {this.props.historic.map((value) => {
            return <li className="historic">{value}</li>
          })}
          <li>{this.props.current_value}</li>
        </ul>
      </div>
    )
  }
}

export default Screen;