import React from 'react'
import { shallow } from 'enzyme'
// import the *named* export
import { AddExpensePage } from '../../components/AddExpensePage.js'
import expenses from '../fixtures/expenses'

// factorisaton à l'aide d'une des globals de jest (beforreEach())
let addExpense, history, wrapper
beforeEach(() => {
  // définition des espions
  addExpense = jest.fn()
  history = { push: jest.fn() } // push est un attribut de history

  // shallow rendering
  wrapper = shallow(<AddExpensePage 
    addExpense = {addExpense}
    history = {history}
  />)
})

test('should render AddExpensePage correctly', () => {
  // création du shapshot
  expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
  // call the function that get passed to ExpenseForm
  // avec des données réelles tirées de fixtures/expenses
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])

  // vérif. que les fonction espion a été appelées avec le bon argument
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
})
