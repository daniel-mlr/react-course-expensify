/* nettoyage et upload sur git */

import React from 'react'
import ReactDOM from 'react-dom'
// on appelle provider, qui nous permettra de publier un 'store'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore' // s9 lect 99
import { startSetExpenses } from './actions/expenses'
// styling
import 'normalize.css/normalize.css'
import './styles/style.scss'
// style rapporté de ExpenseListFilter
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
// database connection
import './firebase/firebase'

// tests pour promesses
// import './playground/promises'

// création d'un 'store'
const store = configureStore()
const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)
ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'))
store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'))
})

