import React, { Component } from 'react'
import HotelItem from './Item';
class List extends Component {
  render() {
    const hotelList = this.props.hotels.map((i,index) => {
      return <HotelItem key={index.toString()} hotel={i}/>
    });
    return (
      <div>
        <select defaultValue="" onChange={ (e) => this.props.onFilterChange(e.target.value,'price')}>
          <option value=""  disabled>Sort</option>
          <option value="Asc">Price - Asc</option>
          <option value="Desc">Price - Desc</option>
        </select>
        {hotelList}
      </div>
    );
  }
}

export default List;