import React, { Component } from 'react';

class commentAdd extends Component {

    handleClick = () => {

    }
    
    render() {
        return (
            <div>
                <input type="text"/>
                <input type="text"/>
                <span onClick={this.handleClick}>提交</span>
            </div>
        );
    }
}

export default commentAdd;
