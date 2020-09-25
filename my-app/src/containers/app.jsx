// import React from 'react'
import {connect} from 'react-redux'

import {Add} from '../redux/actions'
import Count from '../components/count'

export default connect(
    state => ({count: state}),
    {Add}
)(Count)