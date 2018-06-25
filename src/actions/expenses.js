// actions/expenses.js
// import uuid from 'uuid'
import db from '../firebase/firebase'

// Étapes du traitement synchrone:
// ------------------------------
// components call action generator
// action generator returns object
// component dispatchs object
// redux stores changes

// Étapes du traitement asynchrone:
// --------------------------------
// components call action generator
// action generator returns a __function__
// component dispatch function (redux-thunk add support for that)
// function runs (has the ability to dispatch other actions and do whatever it wants)

// ADD_EXPENSE
//export const addExpense = ({description='', note='', amount=0, createdAt=0} = {}) => ({
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
  // plus nécessaire
  // expense: {
  //   id: uuid(),
  //   description,
  //   note,
  //   amount,
  //   createdAt
  // }
})

export const startAddExpense = (expenseData = {}) => {
  // on retourne maintenant une fonction, plus un objet
  // cette fonction est appelée dans le code de redux avec comme argument 'dispatch'
  return (dispatch) => {
    const { description='', note='', amount=0, createdAt=0 } = expenseData
    const expense = {description, note, amount, createdAt}
    // retourne le résultat pour qu'on puisse le chainer dans les tests
    return db.ref('expenses').push(expense).then((ref) => {
      // ref est retourné si le push est réussi
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const startRemoveExpense = ({ id }) => {
  return (dispatch) => {
    return db.ref(`expenses/${id}`).remove().then(() =>{
      dispatch(removeExpense({ id }))
    })
  }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

export const startSetExpenses = () => {
  return (dispatch) => {
    const expenses = []

    return db.ref('expenses').once('value')
      .then((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        })
        dispatch(setExpenses(expenses))
      })
  }
}

