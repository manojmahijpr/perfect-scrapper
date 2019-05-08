import React, { Component } from 'react'
import CardList from '../CardList';
import { FaMusic } from 'react-icons/fa';
import {repository} from '../../Actions/Actions'

const key = '022c8935032ce652976a3b012057523b';
const IMAGE_URL = 'https://hmp.me/ckmu';
const TRENDING_URL = '';
const TOTAL = 9;


class Musixmatch extends Component {
    
    state = {
        musixMatchData: [],
    }

    componentDidMount() {

        fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=${TOTAL}&country=us&f_has_lyrics=1&apikey=${key}`)
            .then(response => response.json())
            .then(data => {
                this.setMusixMatchData(data.message.body.track_list);
            })
            .catch(err => console.log(err))
    }

    setMusixMatchData = (data) => {
        var musixMatchData = [];
        for(let i=0; i<TOTAL; i++) {
            musixMatchData.push({

                title: '\n\nTrack: ' +data[i].track.track_name,
                body: 'Artist: ' + data[i].track.artist_name,
                imgUrl: IMAGE_URL,
                url: data[i].track.track_edit_url,
            })
        }
        repository.musixMatchData = musixMatchData;
        this.setState({musixMatchData});
    }

    render () {
        console.log(this.state.musixMatchData);
        return (
            <CardList sectionName="Musixmatch" data={this.state.musixMatchData} url={TRENDING_URL}>
                <FaMusic/>
            </CardList>
        )
    }
}

export default Musixmatch