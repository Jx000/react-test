import React, { Component } from 'react';
import PropsTypes from 'prop-types'
class commentAdd extends Component {

    state = {
        name: '',
        content: ''
    }

    static propTypes = {
        addItem: PropsTypes.func.isRequired
    }

    handleClick = () => {
        const {name} = this.state
        const {content} = this.state
        if(!name){
            alert('请输入姓名')
            return
        }
        if(!content) {
            alert('请输入想要说的话')
            return
        }
        const {addItem} = this.props
        // addItem({
        //     name,
        //     content
        // })
        addItem(this.state)
        this.setState({
            name: '',
            content: ''
        })
    }

    handleNameChange = (e) => {
        const name = e.target.value
        this.setState({
            name
        })
    }

    handleContentChange = (e) =>{
        const content = e.target.value
        this.setState({
            content
        })
    }
    
    render() {
       const {name, content} = this.state
        return (
            <div>
                <input type="text" value = {name} onChange={this.handleNameChange}/>
                <input type="text" value = {content} onChange={this.handleContentChange} />
                <button onClick={this.handleClick}>提交</button>
            </div>
        );
    }
}

export default commentAdd;
