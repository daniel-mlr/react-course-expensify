import {login, logout} from '../../actions/auth'


test('should generate action object for login', () => {
  const uid = 'someuid'
  expect(login(uid)).toEqual({type: 'LOGIN', uid: 'someuid'})
})

test('should generate action object for logout', () => {
  expect(logout()).toEqual({type: 'LOGOUT'})
})
