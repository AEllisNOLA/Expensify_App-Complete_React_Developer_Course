import React from 'react'
import { shallow } from 'enzyme'
import Error404 from '../../components/Error404'

test("Should properly render Error404 component", () => {
    const wrapper = shallow(<Error404 />)
    expect(wrapper).toMatchSnapshot()
})