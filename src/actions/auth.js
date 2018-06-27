// src/actions/auth.js

import { firebase, googleAuthProvider} from '../firebase/firebase.js'

export const login = (uid) => ({
  type: 'LOGIN',
  uid
})

export const startLogin = () => {
  return () => {
    // utilisation du provider défini dans firebase
    return firebase.auth().signInWithPopup(googleAuthProvider)
  }
}

export const logout = () => ({
  type: 'LOGOUT'
})

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}
