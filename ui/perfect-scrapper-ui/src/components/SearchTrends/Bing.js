import React, { Component } from 'react'
import CardList from '../CardList';
import { FaSearch } from 'react-icons/fa';

class Bing extends Component {
    render () {
        return (
            <CardList sectionName="Bing">
                <FaSearch/>
            </CardList>
        )
    }
}

export default Bing