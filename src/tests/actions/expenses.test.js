import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('doit mettre en place l objet "remove expense action"', () => {
  const action = removeExpense({id: '123abc'})
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('doit mettre en place l\'objet pour édition de expense', () => {
  const action = editExpense('456def', {note: 'une note quelconque'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '456def',
    updates: {note: 'une note quelconque'}
  })
})

test ('doit mettre en place l\'objet pour l\'ajout de expense', () => {
  const expenseData = {
    description: "Rent",
    amount: 108000,
    createdAt: 1000,
    note: "Le dernier loyer"
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: { 
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test ('should setup add expense action object with default values', () => {
  const action = addExpense()
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: { 
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})
