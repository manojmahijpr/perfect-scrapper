import React, { Component } from 'react'
import CardList from '../CardList';
import { FaYoutube } from 'react-icons/fa';
import {repository} from '../../Actions/Actions'


const YOUTUBE_API_KEY = 'AIzaSyCXM7o4ov9HZpaji6J1_7fds6uQFJXajkk';
const TOTAL = 9;
const TRENDING_URL = 'http://youtube.com/trending';
class Youtube extends Component {

    state = {
        youtubeData: [],
    }

    componentDidMount() {
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=${TOTAL}&key=${YOUTUBE_API_KEY}`)
            .then((res) => res.json())
            .then(({items}) => {
                this.setYoutubeData(items);
            });
    }

    setYoutubeData = (data) => {
        var youtubeData = [];
        console.log(data);
        
        for(let i=0; i<TOTAL; i++) {
            youtubeData.push({

                header: data[i].snippet.channelTitle,
                title: data[i].snippet.title,
                imgUrl: data[i].snippet.thumbnails.high.url,
                url: `http://youtube.com/watch?v=${data[i].id}`,
            })
        }
        repository.youtubeData = youtubeData;
        this.setState({youtubeData});
    }

    render () {

        console.log(this.state.youtubeData)

        return (
            <CardList sectionName="Youtube" data={this.state.youtubeData} url={TRENDING_URL}>
                <FaYoutube/>
            </CardList>
        )
    }
}

export default Youtube