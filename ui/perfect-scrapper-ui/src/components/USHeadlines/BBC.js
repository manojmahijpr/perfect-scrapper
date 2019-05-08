import React, { Component } from 'react'
import CardList from '../CardList';
import {repository} from '../../Actions/Actions'

const TRENDIND_URL = 'https://www.bbc.com/';
const TOTAL = 9;
const NEWS_API_KEY = 'b4ad1383874c4e229d295170f07f3d33';
const SOURCE = 'bbc-news';

export default class BBC extends Component {

  state = {
    bbcdata: []
  }

  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?sources=${SOURCE}&apiKey=${NEWS_API_KEY}`)
      .then(response => response.json())
      .then(({articles}) => {
        this.setBbcData(articles);
      });
  }

  setBbcData = (articles) => {
    var bbcdata = [];

    for( let i=0; i<TOTAL; i++ ) {

      //let description = githubData[i].description.length>21 ? githubData[i].description.substring(0,25) : githubData[i].description;

      bbcdata.push({
        header: 'Author: ' + (articles[i].author || 'BBC'),
        title: 'Title: ' + articles[i].title,
        url: articles[i].url,
        imgUrl : articles[i].urlToImage,
        description: 'Description: ' + articles[i].description,
      })
    }
    repository.bbcData = bbcdata;
    this.setState({bbcdata})
  }

  render() {
    return (
      <div>
        <CardList sectionName="BBC" data={this.state.bbcdata} url={TRENDIND_URL}>
        </CardList>
      </div>
    )
  }
}
