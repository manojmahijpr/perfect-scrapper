import React, { Component } from 'react'
import CardList from '../CardList';
import { FaTwitter } from 'react-icons/fa';
import {repository} from '../../Actions/Actions'

const IMAGE_URL = 'https://hmp.me/cknv';
const TOTAL = 9;
const TRENDING_URL = '';

class Twitter extends Component {

  state = {
    twitterData: [],
  }

  componentDidMount() {
    fetch(`http://localhost:8000/twitter-data/`)
      .then((res) => res.json())
      .then(({trends}) => {
          this.setTwitterData(trends);
      });
  }

  setTwitterData = (object) => {
    var twitterData = [];
    
    for(let i=0; i<TOTAL; i++) {
      twitterData.push({

        title: `-> #${object[i].name}`,
        body: object[i].tweet_volume ? 'Tweets Count: ' +object[i].tweet_volume : null,
        imgUrl: IMAGE_URL,
        url: object[i].url,
      })
    }
    repository.twitterData = twitterData;
    this.setState({twitterData});
  }


    render () {
        
        return (
            <div>
                <CardList sectionName="Twitter" data={this.state.twitterData} url={TRENDING_URL}>
                    <FaTwitter/>
                </CardList>
            </div>
        )
    }
}

export default Twitter