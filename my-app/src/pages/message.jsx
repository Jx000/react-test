import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import MyNavLink from '../components/myNavLink'
import MessageDetail from './messagedetail'
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

    handleLook = (id) => {
        this.props.history.push(`/home/message/messagedetail/${id}`)
    }

    handleLook2 = (id) => {
        this.props.history.replace(`/home/message/messagedetail/${id}`)
    }

    goBack = () => {
        this.props.history.goBack()
    }

    goForward = () => {
        this.props.history.goForward()
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.msgList.map((msg, index) => (
                            <li key={index}>
                                <MyNavLink to={`/home/message/messagedetail/${msg.id}`}>{msg.title}</MyNavLink>
                                &nbsp;&nbsp;&nbsp;
                                <button onClick={() => this.handleLook(msg.id)}>查看</button>
                                <button onClick={() => this.handleLook2(msg.id)}>查看</button>
                            </li>
                        ))
                    }
                </ul>
                <p>
                    <button onClick={this.goBack}>回退</button>
                    <button onClick={this.goForward}>前进</button>
                </p>
                <Route path='/home/message/messagedetail/:id' component={MessageDetail}/>
            </div>
        )
    }
}
