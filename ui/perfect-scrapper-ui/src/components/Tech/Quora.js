import React, { Component } from 'react'
import CardList from '../CardList';
import { FaQuora } from 'react-icons/fa';

export default class Quora extends Component {

  state = {
    quora: [
      {
        header: 'airbnb',             // Author
        title: 'Github-Monitor',       // Name
        //url: 'http://google.co.in',   // Url
        description: 'Hello World',   //description
        footer: 'Javascript'        //Language
      }
    ]
  }

  render() {
    return (
      <CardList sectionName="Quora" data={this.state.quora}>
        <FaQuora />
      </CardList>
    )
  }
}
