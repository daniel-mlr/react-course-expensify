// LoadingPage.test.js

import React from 'react'
import LoadingPage from '../../components/LoadingPage.js'
import { shallow } from 'enzyme'

test('should render LoadingPage', () => {
  const wrapper = shallow(<LoadingPage/>)
  expect(wrapper).toMatchSnapshot()
})
