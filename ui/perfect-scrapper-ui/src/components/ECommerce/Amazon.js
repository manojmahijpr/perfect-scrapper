import React, { Component } from 'react'
import CardList from '../CardList';
import { FaAmazon } from 'react-icons/fa';

class Amazon extends Component {
    render () {
        return (
            <CardList sectionName="Amazon">
                <FaAmazon/>
            </CardList>
        )
    }
}

export default Amazon