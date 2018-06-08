import React from 'react'
// import ReactShallowRenderer from 'react-test-renderer/shallow'
import { shallow } from 'enzyme'
import Header from '../../components/Header'
// plus nécessaire avec "snapshotSerializers" dans jest.config.json
// import toJSON from 'enzyme-to-json'

test('should render Header correctly', () => {
  /*
   * avec react-test-renderer
   *
  const renderer = new ReactShallowRenderer()
  renderer.render(<Header/>)
  expect(renderer.getRenderOutput()).toMatchSnapshot()
  */

  const wrapper = shallow(<Header/>)
  /* expect(toJSON(wrapper)).toMatchSnapshot()  toJSON plus nécessaire  */
  expect(wrapper).toMatchSnapshot()
})

