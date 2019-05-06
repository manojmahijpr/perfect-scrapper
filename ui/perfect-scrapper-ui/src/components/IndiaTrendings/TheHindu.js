import React, { Component } from 'react'
import CardList from '../CardList';
import {repository} from '../../Actions/Actions'

const TRENDIND_URL = '';
const TOTAL = 6;
const NEWS_API_KEY = 'b4ad1383874c4e229d295170f07f3d33';
const SOURCE = 'the-hindu';

export default class TheHindu extends Component {

  state = {
    theHinduData: []
  }

  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?sources=${SOURCE}&apiKey=${NEWS_API_KEY}`)
      .then(response => response.json())
      .then(({articles}) => {
        this.setTheHinduData(articles);
      });
  }

  setTheHinduData = (articles) => {
    var theHinduData = [];

    for( let i=0; i<TOTAL; i++ ) {

      //let description = githubData[i].description.length>21 ? githubData[i].description.substring(0,25) : githubData[i].description;

      theHinduData.push({
        header: 'Author: ' + articles[i].author || 'The Hindu',
        title: 'Title: ' + articles[i].title,
        url: articles[i].url,
        imgUrl : articles[i].urlToImage,
        description: 'Description: ' + articles[i].description,
      })
    }
    repository.theHinduData = theHinduData;
    this.setState({theHinduData})
  }

  render() {
    return (
      <div>
        <CardList sectionName="The Hindu" data={this.state.theHinduData} url={TRENDIND_URL}>
        </CardList>
      </div>
    )
  }
}
