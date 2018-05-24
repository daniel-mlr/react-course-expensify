/* eslint no-case-declarations: 0 */
import { createStore } from 'redux'

// action generators: functions that return action objects
//
const incrementCount = ({incrementBy = 1} = {}) => (
  // déstructuration de l'objet (payload) passé en argument. Si l'objet existe
  // et qu'il a une propriété nommée 'incrementBy', on prend cette valeur.
  // Sinon, c'est 1.  Si pas d'argument, alors l'argument est un objet vide.
  { 
    type: 'INCREMENT',
    incrementBy   // simplification de incrementBy: incrementBy
  }
)
const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = () => ({ type: 'RESET' })
const setCount = ({count}) => ({ 
  // pas nécessaire de spécifier des valeurs par défaut. L'argument est requis
  // par nature.
  type: 'SET',
  count
})

// fonction de type 'reducer'
// reducer: actions describe the fact that *something happened* but don't
// specify how the application state changes in response. This is the job of
// reducers.

// attributes of a reducer:
// 1- reducers are pure functions: the output is only determined by the input.
//    Doesn't use or change anything outside of the function scope.
// 2- never change state or actions

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
  case 'INCREMENT': 
    return { count: state.count + action.incrementBy }
  case 'DECREMENT': 
    return { count: state.count - action.decrementBy }
  case 'SET': 
    return { count: action.count }
  case 'RESET': return { count: 0 }
  default: return state
  }
}
const store = createStore(countReducer )

const unsubscribe = store.subscribe( () => {
  console.log(store.getState())
})

// store.dispatch prend un objet en argument.
// La fonction donnée en argument génère un objet d'action consistant ici à
// incrémenter le count
store.dispatch(incrementCount({incrementBy: 5}))

// similairement ...
store.dispatch(incrementCount())
store.dispatch(resetCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy: 50}))
store.dispatch(setCount({count: 121}))
unsubscribe()
