import React, { Component } from 'react'

export default class Message extends Component {

    state = {
        msgList: []
    }

    componentDidMount() {
        setTimeout(() => {
            const  msgList = [
                {id: 1, title: '11'},
                {id: 2, title: '22'},
                {id: 3, title: '66'}
            ]
            this.setState({msgList})
        }, 1000)
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.msgList.map((msg, index) => (
                            <li key={index}>
                                <a href="11">{msg.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
