import React, { Component } from 'react'

class Item extends Component {
  render() {
    return (
        <h1>{this.props.hotel.name} - {this.props.hotel.price}</h1>
    );
  }
}

export default Item;
