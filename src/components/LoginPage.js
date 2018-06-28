// src/components/LoginPage.js
/* eslint react/prop-types: 0 */
import { connect } from 'react-redux'
import React from 'react'
import { startLogin } from '../actions/auth.js'

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>Example app made in Andrew Mead&#39;s React course on Udemy</p>
      <button className="button" onClick={startLogin}>Login with Google</button>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
