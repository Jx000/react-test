import React, { Component } from 'react'
import PropsTypes from 'prop-types'

export default class Search extends Component {

    state = {
        searchValue: ''
    }

    static propTypes = {
        getSearchName: PropsTypes.func.isRequired
    }

    handleClick = () => {
        const {searchValue} = this.state
        const {getSearchName} = this.props
        getSearchName(searchValue)
    }

    handleChange = (e) => {
        const searchValue = e.target.value
        this.setState({searchValue})
    }


    render() {
        return (
            <div>
                <input type="text" value={this.state.searchValue} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>search</button>
            </div>
        )
    }
}
