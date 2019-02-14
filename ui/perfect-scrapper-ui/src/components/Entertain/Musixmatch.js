import React, { Component } from 'react'
import CardList from '../CardList';
import { FaMusic } from 'react-icons/fa';

class Musixmatch extends Component {
    render () {
        return (
            <CardList sectionName="Musixmatch">
                <FaMusic/>
            </CardList>
        )
    }
}

export default Musixmatch