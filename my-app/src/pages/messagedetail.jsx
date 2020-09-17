import React, { Component } from 'react'

export default class MessageDetail extends Component {
    
    state = {
        messageData : [
            {id: 1, title: '11', content: '氙气大灯'},
            {id: 2, title: '22', content: '卤素大灯'},
            {id: 3, title: '66', content: 'LED大灯'}
        ]
    }
    
    render() {
        const {id} = this.props.match.params
        const message = this.state.messageData.find((m) => m.id === id*1)
        return (
            <div>
                <ul>
                    <li>{message.id}</li>
                    <li>{message.title}</li>
                    <li>{message.content}</li>
                </ul>
            </div>
        )
    }
}
