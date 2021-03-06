/* nettoyage et upload sur git */

import React from 'react'
import ReactDOM from 'react-dom'
// on appelle provider, qui nous permettra de publier un 'store'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore' // s9 lect 99
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/auth'

// styling
import 'normalize.css/normalize.css'
import './styles/style.scss'
// style rapporté de ExpenseListFilter
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
// database connection
import { firebase } from './firebase/firebase'
import LoadingPage from './components/LoadingPage'

// tests pour promesses
// import './playground/promises'

// création d'un 'store'
const store = configureStore()
const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

// we want to render only once
let hasRendered = false
const renderApp = () => {
  if ( !hasRendered ) {
    ReactDOM.render(jsx, document.getElementById('app'))
    hasRendered = true
  }
}
ReactDOM.render(<LoadingPage/>, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
  // callback function when auth state changes
  if (user) {
    console.log('user id: ', user.uid)
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
      if ( history.location.pathname === '/' ) {
        history.push('/dashboard')
      }
    })
  } else {
    console.log('logged out')
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})
