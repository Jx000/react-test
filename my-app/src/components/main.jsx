import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import axios from 'axios'


export default class Main extends Component {

    state = {
        initView:true,
        loading: false,
        users: [],
        errorMsg: null
    }

    static propTypes = {
        searchName : PropsTypes.string.isRequired
    }

    static getDerivedStateFromProps = (props, state) => {
        // console.log(props)
        const {searchName} = props
        // console.log(state)
        if(searchName){
            // state.initView = false
            // state.loading = true
            const url = `https://api.github.com/search/users?q=${searchName}`
            axios.get(url).then(res => {
                state.users = res.data.items
                console.log(state)
                // users = res.data.items
                // console.log(res)
            }).catch(err => {
                console.log(err)
            })
        }
        // const {searchName} = props
        // this.setState({
        //     initView: false,
        //     loading: true
        // })
        return null
    }
    render() {
        const {users} = this.state
        
        return (
            <div>
                {/* <p>{users}</p> */}
                {/* {users.map((user, index) => 
                    <div key={index}>
                        <p>{user.login}</p>
                        <img src={user.avatar_url} alt=""/>
                    </div> )} */}
            </div>
        )
    }
}
