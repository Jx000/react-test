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

    addItem = (item) => {
        const {comments} = this.state
        comments.unshift(item)
        this.setState({
            comments
        })
    }

    delItems = (index) => {
        const {comments} = this.state
        comments.splice(index, 1)
        this.setState({
            comments
        })
    }

    render() {
        const { comments } = this.state
        const addItem = this.addItem
        const delItems = this.delItems
        return (
            <div>
                <h3> 
                    学习React
                </h3>
                <div className="content">
                    <CommentAdd addItem={addItem} />
                    <CommentList comments={comments} delItems={delItems}/>
                </div>
            </div>
        );
    }
}

export default app;
