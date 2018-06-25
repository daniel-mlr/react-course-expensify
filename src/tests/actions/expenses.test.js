import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { 
  addExpense, startAddExpense, editExpense, removeExpense
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

// creating a config. so that all tests can create the same mock-store
const createMockStore = configureMockStore([thunk])
//                                            ▲
// passing an array of middlewares to be used ┘

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

test('doit mettre en place l\'objet pour l\'ajout de expense', () => {
  // const expenseData = {
  //   description: 'Rent',
  //   amount: 108000,
  //   createdAt: 1000,
  //   note: 'Le dernier loyer'
  // }
  // const action = addExpense(expenseData)
  const action = addExpense(expenses[2])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    // expense: {
    //   ...expenseData,
    //   id: expect.any(String)
    // }
    expense: expenses[2]
  })
})

test('should add expense to database and store', (done) => {
  // Argument done spécifie que le test doit être effectué seulement
  // apres avoir appelé 'done'

  // creating a mock-store
  const store = createMockStore({})
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This is a better one!',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    // on doit dire à jest que la fonction est asynchone. Autrement, ce test
    // passera toujours.
    // expect(1).toBe(2)  // ---> pas d'erreur si non suivi de done()
    const actions = store.getActions() // retourne array of all actions sent
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: { id: expect.any(String), ...expenseData }
    })
    // remplacé par pattern de chainage de promesses
    // database.ref(`expenses/${actions[0].expense.id}`)
    //   .once('value').then((snapshot) => {
    //     expect(snapshot.val()).toEqual(expenseData)
    //     done() //jest doit attendre jusqu'à ce moment avant de décider du
    //     //       succès du test
    //   })
    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done() //jest doit attendre jusqu'à ce moment avant de décider du
  })
})

test('should add expense with defaults to database and store', (done) => {
  // creating a mock-store
  const store = createMockStore({})
  const defaultExpense = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  }
  store.dispatch(startAddExpense({})).then(() => {
    // on doit dire à jest que la fonction est asynchone. Autrement, ce test
    // passera toujours.
    // expect(1).toBe(2)  // ---> pas d'erreur si non suivi de done()
    const actions = store.getActions() // retourne array of all actions sent
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: { id: expect.any(String), ...defaultExpense }
    })
    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(defaultExpense)
    done() //jest doit attendre jusqu'à ce moment avant de décider du
  })
})
/**
 * première version

test('should setup add expense action object with default values', () => {
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
*/
