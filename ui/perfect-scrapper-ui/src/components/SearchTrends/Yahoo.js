import React, { Component } from 'react'
import CardList from '../CardList';
import { FaYahoo } from 'react-icons/fa';

class Yahoo extends Component {
    render () {
        return (
            <CardList sectionName="Yahoo">
                <FaYahoo/>
            </CardList>
        )
    }
}

export default Yahoo