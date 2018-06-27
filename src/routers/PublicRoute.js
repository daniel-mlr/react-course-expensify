// routers/PublicRoute.js
/* eslint react/prop-types: 0 */

import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
// import Header from '../components/Header'

// unconnected component
export const PublicRoute = ({
  // setting up a public only route as a wrapper around Route
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <Redirect to="/dashboard" />
    ): (
      <Component {...props}/>
    )
  )}/>
)

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)
