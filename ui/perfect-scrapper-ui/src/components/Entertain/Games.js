import React, { Component } from 'react'
import CardList from '../CardList';
import { FaGamepad } from 'react-icons/fa';

class Games extends Component {
    render () {
        return (
            <CardList sectionName="Games">
                <FaGamepad/>
            </CardList>
        )
    }
}

export default Games