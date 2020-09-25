import React, { Component } from 'react'

import {Add} from '../redux/actions'

export default class App extends Component {

    state = {
        selectValue: 1
    }

    handleAdd = () => {
        const {selectValue} = this.state
        // console.log(count)
        // this.setState({count: count * 1 + selectValue * 1})
        this.props.store.dispatch((Add(selectValue*1)))
    }

    handleChange = (e) => {
        const selectValue = e.target.value
        this.setState({selectValue})
    }

    render() {
        const {selectValue} = this.state
        const count = this.props.store.getState()
        return (
            <div>
                <p>click {count} timers</p>
                <div>
                    <select value={selectValue} onChange={this.handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>

                    <button onClick={this.handleAdd}>+</button>
                    <button>-</button>
                    <button>x</button>
                    <button>/</button>
                </div>
            </div>
        )
    }
}
