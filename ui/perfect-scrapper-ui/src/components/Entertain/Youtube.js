import React, { Component } from 'react'
import CardList from '../CardList';
import { FaYoutube } from 'react-icons/fa';

class Youtube extends Component {
    render () {
        return (
            <CardList sectionName="Youtube">
                <FaYoutube/>
            </CardList>
        )
    }
}

export default Youtube