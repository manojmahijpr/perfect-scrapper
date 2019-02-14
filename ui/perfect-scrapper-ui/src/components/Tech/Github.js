import React, { Component } from 'react'
import CardList from '../CardList';
import { FaGithub } from 'react-icons/fa';

export default class Github extends Component {
  render() {
    return (
      <CardList sectionName="Github">
        <FaGithub />
      </CardList>
    )
  }
}
