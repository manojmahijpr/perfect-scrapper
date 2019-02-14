import React, { Component } from 'react'
import CardList from '../CardList';
import { FaGoogle } from 'react-icons/fa';

class Google extends Component {
    render () {
        return (
            <CardList sectionName="Google">
                <FaGoogle/>
            </CardList>
        )
    }
}

export default Google