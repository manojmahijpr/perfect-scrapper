import React, { Component } from 'react'
import CardList from '../CardList';
import { FaGithub } from 'react-icons/fa';

export default class Github extends Component {

  state = {
    githubData: []
  }

  componentDidMount() {
    fetch("https://github-trending-api.now.sh/repositories?language=javascript&since=daily")
      .then(response => response.json())
      .then(data => this.setState({githubData: data}));
  }

  render() {
    return (
      <CardList sectionName="Github" data={this.state.githubData}>
        <FaGithub />
      </CardList>
    )
  }
}
