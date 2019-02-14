import React, { Component } from 'react'
import CardList from '../CardList';
import { FaPuzzlePiece } from 'react-icons/fa';

export default class Flipkart extends Component {
  render() {
    return (
      <CardList sectionName="Flipkart">
        <FaPuzzlePiece />
      </CardList>
    )
  }
}
