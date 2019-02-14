import React, { Component } from 'react'
import CardList from '../CardList';
import { FaQuora } from 'react-icons/fa';

export default class Quora extends Component {
  render() {
    return (
      <CardList sectionName="Quora">
        <FaQuora />
      </CardList>
    )
  }
}
