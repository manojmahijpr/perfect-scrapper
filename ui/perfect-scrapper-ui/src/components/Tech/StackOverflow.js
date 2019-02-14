import React, { Component } from 'react'
import CardList from '../CardList';
import { FaStackOverflow } from 'react-icons/fa';

export default class StackOverflow extends Component {
  render() {
    return (
      <CardList sectionName="Stack Overflow">
        <FaStackOverflow />
      </CardList>
    )
  }
}
