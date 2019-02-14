import React, { Component } from 'react'
import CardList from '../CardList';
import { FaPuzzlePiece } from 'react-icons/fa';

export default class Snapdeal extends Component {
  render() {
    return (
      <div>
        <CardList sectionName="Flipkart">
          <FaPuzzlePiece />
        </CardList>
      </div>
    )
  }
}
