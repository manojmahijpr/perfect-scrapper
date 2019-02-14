import React, { Component } from 'react'
import CardList from '../CardList';
import { FaFacebookF } from 'react-icons/fa';

export default class Facebook extends Component {
  render() {
    return (
      <div>
        <CardList sectionName="Facebook">
          <FaFacebookF/>
        </CardList>
      </div>
    )
  }
}
