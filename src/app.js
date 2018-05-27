/* s8 lect 62 Refactoring Stateless Funcional components */

import React from 'react'
import ReactDOM from 'react-dom'
// on appelle provider, qui nous permettra de publier un 'store'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore' // s9 lect 99
import {addExpense} from './actions/expenses'
// import getVisibleExpenses from './selectors/expenses'
// Sect 11 lect 104: plus nécessaire (voir plus bas)
// import {setTextFilter} from './actions/filters'
import 'normalize.css/normalize.css'
import './styles/style.scss'

// s9 lect 99 combining all together

// création d'un 'store'
const store = configureStore()

store.dispatch(addExpense({
  description: 'Water Bill',
  amount: 500,
  createdAt: 1000
}))
store.dispatch(addExpense({
  description: 'Gas bill',
  amount: 800,
  createdAt: 80000
}))
store.dispatch(addExpense({
  description: 'Rent',
  amount: 109500,
  createdAt: 48000
}))
store.dispatch(addExpense({
  description: 'Personnel',
  amount: 1200,
  createdAt: 42000
}))

/* maintenant, le setTextFilter est appelé avec le 'onChange' de <input> 
 *
 *
 * store.dispatch(setTextFilter('water'))
 *
 * setTimeout(() => {
 *   store.dispatch(setTextFilter('bill'))
 * }, 3000 )
 *
 *
 */

//const state = store.getState()

//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
//console.log('visibleExpenses --- ', visibleExpenses)

// rend le 'store' accessible à tous les autres 'components'
const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'))
