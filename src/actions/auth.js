// src/actions/auth.js

import { firebase, googleAuthProvider} from '../firebase/firebase.js'

export const startLogin = () => {
  return () => {
    // utilisation du provider défini dans firebase
    return firebase.auth().signInWithPopup(googleAuthProvider)
  }
}
export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}
