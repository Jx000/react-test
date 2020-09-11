import React, { Component } from 'react';
import CommentAdd from '../commentAdd/commentAdd';
import CommentList from '../commentList/commentList';
import './app.css'
class app extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         comment: [
    //             {name: 'jx', content: '111'},
    //             {name: 'jxx', content: '11111'}
    //         ]
    //     }
    // }

    state = {
        comments: [
            {name: 'jx', content: '111'},
            {name: 'jxx', content: '11111'}
        ]
    }

    render() {
        const { comments } = this.state
        return (
            <div>
                <h3>
                    学习React
                </h3>
                <div className="content">
                    <CommentAdd />
                    <CommentList comments={comments}/>
                </div>
            </div>
        );
    }
}

export default app;
