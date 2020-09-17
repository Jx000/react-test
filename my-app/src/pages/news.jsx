import React, { Component } from 'react'

export default class News extends Component {

    state = {
        newsList: ['121', '233', '666']
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.newsList.map((news, index) => <li key={index}>{news}</li>)}    
                </ul>    
            </div>
        )
    }
}
