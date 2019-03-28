import React, { Component } from 'react'
import CardList from '../CardList';
import { FaMusic } from 'react-icons/fa';

const key = '022c8935032ce652976a3b012057523b';

class Musixmatch extends Component {
    
    state = {
        musicData: [],
    }

    componentDidMount() {

        fetch(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${key}`)
            .then(response => response.json())
            .then(data => this.setState({musicData: data}))
            .catch(err => console.log(err))

    }

    render () {
        console.log(this.state.musicData);
        return (
            <CardList sectionName="Musixmatch">
                <FaMusic/>
            </CardList>
        )
    }
}

export default Musixmatch