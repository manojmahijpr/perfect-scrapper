import React, { Component } from 'react'
import CardList from '../CardList';
import { FaStackOverflow } from 'react-icons/fa';
import {repository} from '../../Actions/Actions'

const IMAGE_URL = 'https://hmp.me/ckmv';
const TOTAL = 6;
const TRENDING_URL = 'https://stackoverflowData.com/?tab=hot';

export default class StackOverflow extends Component {

  state = {
    stackoverflowData: [],
  }

  componentDidMount() {
    fetch(`http://localhost:8000/stackoverflow-data/`)
      .then((res) => res.json())
      .then(({questions}) => {
          this.setStackoverflowData(questions.items);
      });
  }

  setStackoverflowData = (object) => {
    var stackoverflowData = [];
    console.log(object);
    
    for(let i=0; i<TOTAL; i++) {
      stackoverflowData.push({

        header: `Author: ${object[i].owner.display_name} (Reputation: ${object[i].owner.reputation})`,
        title: 'Question: ' +object[i].title,
        body: 'View Count: ' + object[i].view_count,
        description: 'Answer Count: ' + object[i].answer_count,
        imgUrl: object[i].owner.profile_image || IMAGE_URL,
        url: object[i].link,
      })
    }
    repository.stackoverflowData = stackoverflowData;
    this.setState({stackoverflowData});
  }


  render() {
    return (
      <CardList sectionName="Stack Overflow" data={this.state.stackoverflowData} url={TRENDING_URL}>
        <FaStackOverflow />
      </CardList>
    )
  }
}
