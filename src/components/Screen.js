import React, { Component } from 'react';

class Screen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={'display'}>
        <ul>
          {this.props.historic.map((value) => {
            return <li>{value}</li>
          })}
          <li>{this.props.current_value}</li>
        </ul>
      </div>
    )
  }
}

export default Screen;