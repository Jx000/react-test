import React, { Component } from 'react';
import PropsTypes from 'prop-types'

import CommentItem from '../commentItem/commentItem';


class CommentList extends Component {

    static propTypes = {
        comments: PropsTypes.array.isRequired
    }

    render() {
        const {comments} = this.props
        return (
            <div>
                <ul>
                    {
                        comments.map((comment, index) => <CommentItem comment={comment} key={index}/>) 
                    }
                </ul>
            </div>
        );
    } 
}

export default CommentList;
