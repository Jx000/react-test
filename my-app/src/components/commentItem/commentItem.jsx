import React, { Component } from 'react';
import PropsTypes from 'prop-types';

class CommentItem extends Component {

    static propTypes = {
        comment: PropsTypes.object.isRequired
    }

    render() {
        const {comment} = this.props
        return (
            <li>
                <p>{comment.name}</p>
                <p>{comment.content}</p>
            </li>
        );
    }
}

// CommentItem.PropsTypes = {
//     comment: PropsTypes.object.isRequired
// }

export default CommentItem;
