import React, { Component } from 'react'
import CardList from '../CardList';
import {repository} from '../../Actions/Actions'

const TRENDIND_URL = '';
const TOTAL = 9;
const NEWS_API_KEY = 'b4ad1383874c4e229d295170f07f3d33';
const SOURCE = 'google-news-in';

export default class GoogleNewsIndia extends Component {

  state = {
    googleNewsIndiaData: []
  }

  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?sources=${SOURCE}&apiKey=${NEWS_API_KEY}`)
      .then(response => response.json())
      .then(({articles}) => {
        this.setGoogleNewsData(articles);
      });
  }

  setGoogleNewsData = (articles) => {
    var googleNewsIndiaData = [];

    for( let i=0; i<TOTAL; i++ ) {

      //let description = githubData[i].description.length>21 ? githubData[i].description.substring(0,25) : githubData[i].description;

      googleNewsIndiaData.push({
        header: 'Author: ' + (articles[i].author || 'Google'),
        title: 'Title: ' + articles[i].title,
        url: articles[i].url,
        imgUrl : articles[i].urlToImage,
        description: 'Description: ' + articles[i].description,
      })
    }
    repository.googleNews = googleNewsIndiaData;
    this.setState({googleNewsIndiaData})
  }

  render() {
    return (
      <div>
        <CardList sectionName="Google News India" data={this.state.googleNewsIndiaData} url={TRENDIND_URL}>
        </CardList>
      </div>
    )
  }
}
