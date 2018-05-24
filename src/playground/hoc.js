/* eslint no-unused-vars: 0, react/prop-types: 0, react/display-name: 0 */

// Higher order component (HOC): a component that renders another component
// Objectifs de HEC:
//  * Reuse code
//  * Render hijacking
//  * Prop manipulation
//  * Abstract state


import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Info secrète est: {props.info}</p>
  </div>
)

// regular function (not a component)
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private. Please do not share.</p> }
      <WrappedComponent {...props}/>
    </div>
  )
}

// HOC
const AdminInfo = withAdminWarning(Info)

// challenge : require authentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props}/>
      ):(
        <p>You must login to see that.</p>
      )}
    </div>
  )
}

const AuthInfo = requireAuthentication(Info)


ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="code secret 12345" />, 
  document.getElementById('app')
)
//ReactDOM.render(
//  <AdminInfo isAdmin={true} info="rien de nouveau" />, 
//  document.getElementById('app')
//)
