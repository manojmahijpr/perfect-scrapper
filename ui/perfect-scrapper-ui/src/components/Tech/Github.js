import React, { Component } from 'react'
import CardList from '../CardList';
import { FaGithub } from 'react-icons/fa';
import {repository} from '../../Actions/Actions'

const IMAGE_URL = 'https://github.githubassets.com/images/modules/open_graph/github-octocat.png';
const TRNEDING_URL = 'https://github.com/trending';
const TOTAL = 9;
export default class Github extends Component {

  state = {
    githubData: [
      {
        header: 'airbnb',             // Author
        title: 'Github-Monitor',       // Name
        imgUrl: IMAGE_URL,
        url: 'http://google.co.in',   // Url
        description: 'Hello World',   //description
        footer: 'Javascript'        //Language
      }
    ]
  }

  getData = (githubData) => {
    var githubCardData = [];

    
    if(githubData.length <10)
      return;

    for( let i=0; i<TOTAL; i++ ) {

      githubCardData.push({
        header: 'Author: ' + githubData[i].author,
        title: 'Repo: ' + githubData[i].name,
        url: githubData[i].url,
        imgUrl : IMAGE_URL,
        body: 'Stars: ' + githubData[i].stars,
        description: 'Description: ' + githubData[i].description,
        footer: 'lang: ' + githubData[i].language
      })
    }
    repository.githubData = githubCardData;
    return githubCardData;
  }


  componentDidMount() {
    fetch("https://github-trending-api.now.sh/repositories")
      .then(response => response.json())
      .then(data => this.setState({githubData: data}));
  }

  render() {

    const githubCardData = this.getData(this.state.githubData);
    console.log(this.state.githubData);
    

    return (
      <CardList sectionName="Github" data={githubCardData} url={TRNEDING_URL}>
        <FaGithub />
      </CardList>
    )
  }
}
