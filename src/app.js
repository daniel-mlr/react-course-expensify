/* s8 lect 62 Refactoring Stateless Funcional components */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore' // s9 lect 99
import {addExpense} from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'
import {setTextFilter} from './actions/filters'
import 'normalize.css/normalize.css'
import './styles/style.scss'

// s9 lect 99 combining all together

const store = configureStore()
// console.log(store.getState())

store.dispatch(addExpense({
  description: 'Water Bill',
  amount: 500,
  createdAt: 1000
}))
store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 800,
  createdAt: 4000
}))
store.dispatch(setTextFilter('wat'))

const state = store.getState()
//console.log('state --- ', state)
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log('visibleExpenses --- ', visibleExpenses)

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'))
