import React, { Component } from 'react'
import CardList from '../CardList';
import {repository} from '../../Actions/Actions'

const TRENDIND_URL = '';
const TOTAL = 6;
const NEWS_API_KEY = 'b4ad1383874c4e229d295170f07f3d33';
const SOURCE = 'the-wall-street-journal';

export default class TheWSJ extends Component {

  state = {
    theWallStreetData: []
  }

  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?sources=${SOURCE}&apiKey=${NEWS_API_KEY}`)
      .then(response => response.json())
      .then(({articles}) => {
        this.setTheWallStreetData(articles);
      });
  }

  setTheWallStreetData = (articles) => {
    var theWallStreetData = [];

    for( let i=0; i<TOTAL; i++ ) {

      //let description = githubData[i].description.length>21 ? githubData[i].description.substring(0,25) : githubData[i].description;

      theWallStreetData.push({
        header: 'Author: ' + (articles[i].author || 'The Wall Street Journal'),
        title: 'Title: ' + articles[i].title,
        url: articles[i].url,
        imgUrl : articles[i].urlToImage,
        description: 'Description: ' + articles[i].description,
      })
    }
    repository.wsjData = theWallStreetData;
    this.setState({theWallStreetData})
  }

  render() {
    return (
      <div>
        <CardList sectionName="The Wall Street Journal" data={this.state.theWallStreetData} url={TRENDIND_URL}>
        </CardList>
      </div>
    )
  }
}
