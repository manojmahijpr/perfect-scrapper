import React, { Component } from 'react'
import CardList from '../CardList';
import { FaRedditAlien } from 'react-icons/fa';




class Reddit extends Component {
    render () {
        return (
            
            <CardList sectionName="Reddit">
                <FaRedditAlien/>
            </CardList>
        
        )
    }
}

export default Reddit