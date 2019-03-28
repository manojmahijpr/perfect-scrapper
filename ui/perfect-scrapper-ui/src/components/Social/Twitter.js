import React, { Component } from 'react'
import CardList from '../CardList';
import { FaTwitter } from 'react-icons/fa';

class Twitter extends Component {

    state = {
        twitterData: [],
    }

    componentDidMount() {

        fetch('http://localhost:8000/twitter-data/')
            .then(response => response.json())
            .then(data => this.setState({twitterData: data}))
            .catch(err => console.log(err))

    }

    render () {
        console.log(this.state.twitterData);
        
        return (
            <div>
                <CardList sectionName="Twitter">
                    <FaTwitter/>
                </CardList>
            </div>
        )
    }
}

export default Twitter