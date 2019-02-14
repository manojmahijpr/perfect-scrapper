import React, { Component } from 'react'
import CardList from '../CardList';
import { FaTwitter } from 'react-icons/fa';




class Twitter extends Component {
    render () {
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