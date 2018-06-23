// promises.js

// la création de la promesse est habituellement prise en charge
// par la librairie qu'on utilise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // cette fonction prend du temps à s'exécuter
    // resolve (ou reject) ne prend qu'un seul argument.
    // resolve('this is my resolved data finally comming')
    reject('Accès refusé')
  }, 3000)
})

console.log('ceci arrive avant la promesse')

// la promesse est enregistrée, le programme n'attend pas  et continue ...
// C'est la partie qu'on utilise typiquement
promise.then((data) => {
  console.log('ceci n\'arrive qu\'après 3000ms. ', data)
}).catch((error) => {
  // la fonction catch permet d'éviter une erreur javascript
  console.log('la demande est rejetée. Voici l\'erreur: ', error)
})

// ... jusqu'ici
console.log('ceci s\'exécute immédiateent après (n\'attend pas la promesse)') 
