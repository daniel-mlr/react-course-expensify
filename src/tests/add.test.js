const add = (a, b) => a + b
const generateGreeting = (name = 'Anonyme') => `Hello ${name}`

test('ajoute deux nombres', () => {
  const result = add(3, 4)
  expect(result).toBe(7)
})

test('devrait générer salutations avec nom', () => {
  const result = generateGreeting('Daniel')
  expect(result).toBe('Hello Daniel')
})

test('devrait générer salutations sans nom', () => {
  const result = generateGreeting()
  expect(result).toBe('Hello Anonyme')
})
