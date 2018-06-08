import expenses from '../fixtures/expenses'
import expensesReducer from '../../reducers/expenses'

test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual([])
})
test('should remove expenses by id', () => {
  const action = {type: 'REMOVE_EXPENSE', id: expenses[1].id}
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})
test('should not remove expenses if id not found', () => {
  const action = {type: 'REMOVE_EXPENSE', id: '-1'}
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})
test('should add an expense', () => {
  const expense = {
    id: 4, 
    description: 'test description',
    note: 'test note',
    amount: 1200,
    createdAt: 10000
  }
  const action = {type: 'ADD_EXPENSE',  expense}
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})
test('should edit an expense, given id', () => {
  const amount = 40000
  const action = {
    type: 'EDIT_EXPENSE', 
    id: expenses[1].id, 
    updates: {amount}
  }
  const state = expensesReducer(expenses, action)
  /*
  expect(state).toEqual([
    expenses[0], 
    {...expenses[1], amount}, 
    expenses[2]
  ])
  */
  expect(state[1].amount).toBe(amount)
})
test('should not edit an expense, if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE', 
    id: '-1', 
    updates: {amount: 40000}
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})
