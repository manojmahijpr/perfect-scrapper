import React, { Component } from 'react'
import CardList from '../CardList';
import { FaRedditAlien } from 'react-icons/fa';
import {repository} from '../../Actions/Actions'


const TRENDING_URL = 'https://www.reddit.com/r/popular/top/';
const TOTAL = 9;

class Reddit extends Component {

    state = {
        reditData: [],
    }

    componentDidMount() {
        fetch(`https://www.reddit.com/r/popular/top/.json?count=1`)
            .then((res) => res.json())
            .then(({data}) => {
                this.setReditData(data.children);
            });
    }

    setReditData = (object) => {
        var reditData = [];
        console.log(object);
        
        for(let i=0; i<TOTAL; i++) {
            reditData.push({

                header: 'Author: ' + object[i].data.author,
                title: 'Title: ' +object[i].data.title,
                imgUrl: object[i].data.thumbnail,
                url: object[i].data.url,
            })
        }
        repository.reditData = reditData;
        this.setState({reditData});
    }


    render () {
        return (
            
            <CardList sectionName="Reddit" data={this.state.reditData} url={TRENDING_URL}>
                <FaRedditAlien/>
            </CardList>
        
        )
    }
}

export default Reddit