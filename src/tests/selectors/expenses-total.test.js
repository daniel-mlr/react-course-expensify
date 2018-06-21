// expenses-total.test.js

import selectExpensesTotal from  '../../selectors/expenses-total.js'
import expenses from '../fixtures/expenses.js'

test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([])
  expect(result).toEqual(0)
})

test('should correctly add up single expense', () => {
  const result = selectExpensesTotal([expenses[1]])
  expect(result).toEqual(85000)
})

test('should correctly addup multiple expenses', () => {
  const result = selectExpensesTotal(expenses)
  expect(result).toEqual(89695)
})
