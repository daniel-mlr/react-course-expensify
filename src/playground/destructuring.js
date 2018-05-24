/*
 * Object destructuring
 *
const person = {
  nom: 'Meilleur',
  prenom: 'Daniel',
  age: 65,
  location: {
    ville: 'Arundel',
    temperature: 15
  }
}
const {prenom, age, nom} = person
console.log(`${prenom} ${nom} a ${age} ans.`)
const {ville, temperature: temp} = person.location
console.log(`Il fait ${temp} à ${ville}.`)

const book = {
  title: 'Soumission',
  author: 'Houellebecq',
  publisher: {
    // name: 'Minuit'
  }
}
const { name: publisherName = 'no name'} = book.publisher
console.log(publisherName)
*/

/*
 * Array destructuring

const address = ['128 Jalan Jaksa', 'Jakarta', 'Indonesia', '123456']
const [, city, country ] = address
console.log(`You are in ${city}, ${country}.`)
 */

const item = ['Café', '$2.00', '$2.50', '$3.00']
const [breuvage,,  moyen] =  item
console.log(`Un ${breuvage} moyen coûte ${moyen}`)
