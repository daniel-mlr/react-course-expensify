import React from 'react'
// import ReactShallowRenderer from 'react-test-renderer/shallow'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'
// import { startLogout } from '../../actions/auth.js'
// plus nécessaire avec "snapshotSerializers" dans jest.config.json
// import toJSON from 'enzyme-to-json'

let wrapper, startLogout

beforeEach(() => {
  startLogout = jest.fn()
  wrapper = shallow(<Header startLogout={startLogout}/>)
})

test('should render Header correctly', () => {
  /*
   * avec react-test-renderer
   *
  const renderer = new ReactShallowRenderer()
  renderer.render(<Header/>)
  expect(renderer.getRenderOutput()).toMatchSnapshot()
  */

  /* expect(toJSON(wrapper)).toMatchSnapshot()  toJSON plus nécessaire  */
  expect(wrapper).toMatchSnapshot()
})

test('should call startLogout on button click', (() => {
  wrapper.find('button').simulate('click')
  expect(startLogout).toHaveBeenCalled()
}))
