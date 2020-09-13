import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class CommentItem extends Component {

    static propTypes = {
        comment: PropsTypes.object.isRequired,
        delItem: PropsTypes.func.isRequired,
        index: PropsTypes.number.isRequired
    }

    handleDel = () => {
        // const {comment, delItem} = this.props
        const {delItem, index} = this.props
        delItem(index)
        // console.log(comment)
    }

    render() {
        const {comment} = this.props
        return (
            <li>
                <p>{comment.name}</p>
                <p>{comment.content}</p>
                <button onClick={this.handleDel}>删除</button>
            </li>
        );
    }
}

// CommentItem.PropsTypes = {
//     comment: PropsTypes.object.isRequired
// }

export default CommentItem;
