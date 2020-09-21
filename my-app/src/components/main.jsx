import React, { Component } from 'react'
// import PropsTypes from 'prop-types'
import axios from 'axios'
import PubSub from 'pubsub-js';


export default class Main extends Component {

    state = {
        initView:true,
        loading: false,
        users: [],
        errorMsg: null
    }

    // static propTypes = {
    //     searchName : PropsTypes.string.isRequired
    // }

    componentDidMount() {
        PubSub.subscribe('search', (msg, searchName) => {
            const url = `https://api.github.com/search/users?q=${searchName}`
            axios.get(url).then(res => {
                console.log(res)
                let {users} = this.state
                users = res.data.items
                this.setState({users})
            }).catch(err => {
                console.log(err)
            })
        })
    }

    render() {
        const {users} = this.state
        return (
            <div>
                {users.map((user, index) => 
                    <div key={index}>
                        <p>{user.login}</p>
                        <img src={user.avatar_url} alt=""/>
                    </div> )}
            </div>
        )
    }
}
