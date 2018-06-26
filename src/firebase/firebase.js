// firebase.js
/* global process */
import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}
firebase.initializeApp(config)

// database est une parmi nombreuses fonctionalités de firebase
const db = firebase.database()

export { firebase, db as default }

/*
// ref method: reference to a specfic part of our database
// no argument = reference to the root
// set(value): set the value of that reference
db.ref().set({
  name: 'Daniel M',
  age: 64,
  isGood: true,
  location: {
    city: 'Montréal',
    country: 'Canada'
  }
}).then(() => {
  // ceci s'exécute quand la maj est réussie.
  console.log('Data is saved. ')
}).catch((e) => {
  console.log('Une erreur est survenue. La voici: ', e)
})

  // efface toutes les autres données et ne sauvegarde que l'objet renvoyé
// db.ref().set({age: 58})

// met à jour le champ 'age' et ne touche pas aux autres champs
db.ref('age').set(27)

// met à jour le sous-champ 'city' du champ 'location'
db.ref('location/city').set('Vancouver')

// ajout d'un objet
db.ref('attributes').set({height: 173, weight: 71}).then(() => {
  console.log('La mise à jour de l\'objet s\'est effectuée correctement.')
}).catch((e) => {
  console.log('Une erreur est survenue: ', e)
})


// deleting
db.ref('isGood').remove().then(() => {
  console.log('isGood est définitivement disparu!')
}).catch((e) => {
  console.log('quelque chose de louche s\'est produit: ', e)
})

// updating
db.ref().update({ // prend un objet comme argument 
  name: 'mike',
  age: 29,
  job: 'Software developper', // on peut ajouter un nouveau champ
  isGood: null // et en effacer un autre dans la même opération
})

// updating nested content
db.ref().update({
  name: 'Mike',
  'location/city': 'Toronto'  // route to subfield must be between quote
  // (slash illegal in JSON)
})
// update est aussi une promesse et supporte 'then' et 'catch'


// challenge -------------------------
db.ref().set({
  name: 'Daniel M',
  age: 64,
  job: {
    title: 'epsilon semi-moron',
    company: 'Fedex'
  },
  stressLevel: 6,
  location: {
    city: 'Montréal',
    country: 'Canada'
  }
}).then(() => {
  // ceci s'exécute quand la maj est réussie.
  console.log('Data is saved. ')
}).catch((e) => {
  console.log('Une erreur est survenue. La voici: ', e)
})

db.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Vancouver',
})
// ----------------------------------------

// fetching data
// 'once' est une promesse qui renvoie un 'snapshot'
db.ref('location/city').once('value')
  .then((snapshot) => {
    const valeur = snapshot.val()
    console.log('valeur: ', valeur)
  })
  .catch((e) => {
    console.log('erreur lecture données: ', e)
  })

// lecture avec subscription
db.ref().on('value', (snapshot) => {
  // exécuté chaque fois que les données changent
  console.log('snapshot.val: ', snapshot.val())
}, (e) => {
  // exécuté si une erreur survient pendant la lecture
  console.log('error with data fetching: ', e)
})

// annule la subscription 
// (p. ex. quand la page perd focus)
db.ref().off()


// challenge -------------------------
db.ref().on('value', (snapshot) => {
  const valeur = snapshot.val()
  console.log(`${ valeur.name } travaille comme ${ valeur.job.title } chez ${valeur.job.company}`)
}, (e) => {
  console.log('une erreur de lecture est survenue: ', e)
})
// ----------------------------------------


// working with list-based data
// fonction push génère automatiquement une clé. 
// l'argument peut être une valeur ou un objet
db.ref('notes').push({ 
  title: 'Course Topics',
  body: 'React, React navive, Python'
})

// challenge -------------------------
db.ref('expenses').push({
  description: 'Café',
  note: 'Starbucks',
  amount: 295,
  createdAt: 222955
})
db.ref('expenses').push({
  description: 'Loyer',
  note: 'Vancouver',
  amount: 55500,
  createdAt: 2875221
})
db.ref('expenses').push({
  description: 'MasterCard',
  note: 'dépense inutile',
  amount: 45678,
  createdAt: 2888999
})
// ----------------------------------------


// getting data transformed in the right format for redux
db.ref('expenses').once('value')
  .then((snapshot) => {
    const expenses = []
    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      })
    })
    console.log(expenses)
  })


// challenge -------------------------
db.ref('expenses').on('value', (snapshot) => {
  const expenses = []
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  })
  console.log(expenses)
}, (e) => {
  console.log('une erreur est survenue: ', e)
})
// ----------------------------------------

// surveiller un autre type d'évènement, p.exemple un enfant effacé
db.ref('expenses').on('child_removed', (snapshot) => {
  console.log('ce record est effacé: ', snapshot.key, snapshot.val())
})

// challenge -------------------------
db.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val())
})
// ----------------------------------------
*/
