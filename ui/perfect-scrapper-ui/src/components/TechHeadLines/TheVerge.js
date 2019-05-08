import React, { Component } from 'react'
import CardList from '../CardList';
import {repository} from '../../Actions/Actions'

const TRENDIND_URL = 'https://www.theverge.com/';
const TOTAL = 9;
const NEWS_API_KEY = 'b4ad1383874c4e229d295170f07f3d33';
const SOURCE = 'the-verge';

export default class TheVerge extends Component {

  state = {
    theVergeData: []
  }

  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?sources=${SOURCE}&apiKey=${NEWS_API_KEY}`)
      .then(response => response.json())
      .then(({articles}) => {
        this.setTheVergeData(articles);
      });
  }

  setTheVergeData = (articles) => {
    var theVergeData = [];

    for( let i=0; i<TOTAL; i++ ) {

      //let description = githubData[i].description.length>21 ? githubData[i].description.substring(0,25) : githubData[i].description;

      theVergeData.push({
        header: 'Author: ' + (articles[i].author || 'The Verge'),
        title: 'Title: ' + articles[i].title,
        url: articles[i].url,
        imgUrl : articles[i].urlToImage,
        description: 'Description: ' + articles[i].description,
      })
    }
    repository.theVerge = theVergeData;
    this.setState({theVergeData})
  }

  render() {
    return (
      <div>
        <CardList sectionName="The Verge" data={this.state.theVergeData} url={TRENDIND_URL}>
        </CardList>
      </div>
    )
  }
}
