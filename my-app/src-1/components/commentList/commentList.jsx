import React, { Component } from 'react';
import PropsTypes from 'prop-types'

import CommentItem from '../commentItem/commentItem';


class CommentList extends Component {

    static propTypes = {
        comments: PropsTypes.array.isRequired,
        delItems: PropsTypes.func.isRequired
    }

    delItem = (index) => {
        const { delItems } = this.props
        delItems(index)
    }

    render() {
        const {comments} = this.props
        const delItem = this.delItem
        return (
            <div>
                <h1>评论</h1>
                {comments.length === 0 && <h2>暂无评论</h2>}
                <ul>
                    {
                        comments.map((comment, index) => <CommentItem comment={comment} key={index} delItem={delItem} index = {index}/>) 
                    }
                </ul>
            </div>
        );
    } 
}

export default CommentList;
