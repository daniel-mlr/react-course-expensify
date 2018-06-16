/* s8 lect 62 Refactoring Stateless Funcional components */

import React from 'react'
import ReactDOM from 'react-dom'
// on appelle provider, qui nous permettra de publier un 'store'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore' // s9 lect 99
import {addExpense} from './actions/expenses'
// Sect 13 lect 131
import 'normalize.css/normalize.css'
import './styles/style.scss'
//import 'react-dates/initialize'
//import 'react-dates/lib/css/_datepicker.css'

// création d'un 'store'
const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'))
