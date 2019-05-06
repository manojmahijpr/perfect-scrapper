import React, { Component } from 'react'
import CardList from '../CardList';
import {repository} from '../../Actions/Actions'

const TRENDIND_URL = '';
const TOTAL = 6;
const NEWS_API_KEY = 'b4ad1383874c4e229d295170f07f3d33';
const SOURCE = 'techcrunch';

export default class TechCrunch extends Component {

  state = {
    theTechCrunchData: []
  }

  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?sources=${SOURCE}&apiKey=${NEWS_API_KEY}`)
      .then(response => response.json())
      .then(({articles}) => {
        this.setTechCrunchData(articles);
      });
  }

  setTechCrunchData = (articles) => {
    var theTechCrunchData = [];

    for( let i=0; i<TOTAL; i++ ) {

      //let description = githubData[i].description.length>21 ? githubData[i].description.substring(0,25) : githubData[i].description;

      theTechCrunchData.push({
        header: 'Author: ' + articles[i].author || 'The Hindu',
        title: 'Title: ' + articles[i].title,
        url: articles[i].url,
        imgUrl : articles[i].urlToImage,
        description: 'Description: ' + articles[i].description,
      })
    }
    repository.techCrunch = theTechCrunchData;
    this.setState({theTechCrunchData})
  }

  render() {
    return (
      <div>
        <CardList sectionName="The Hindu" data={this.state.theTechCrunchData} url={TRENDIND_URL}>
        </CardList>
      </div>
    )
  }
}
