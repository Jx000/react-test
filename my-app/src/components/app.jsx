import React, { Component } from 'react'
import Main from './main'
import Search from './search'

export default class App extends Component {

    state = {
        searchName: ''
    }

    getSearchName = (searchName) => {
        this.setState({searchName})
    }

    render() {
        const {searchName} = this.state
        return (
            <div>
                <h2>Search Github Users</h2>
                <Search getSearchName={this.getSearchName} />
                <Main searchName={searchName} />
            </div>
        )
    }
}
