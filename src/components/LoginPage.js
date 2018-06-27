// src/components/LoginPage.js
/* eslint react/prop-types: 0 */
import { connect } from 'react-redux'
import React from 'react'
import { startLogin } from '../actions/auth.js'

export const LoginPage = ({ startLogin }) => (
  <div>
    <p>You must be logged in</p>
    <button onClick={startLogin}>Login</button>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
