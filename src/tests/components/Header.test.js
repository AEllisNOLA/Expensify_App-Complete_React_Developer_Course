import ReactShallowRenderer from 'react-test-renderer/shallow'
import React from 'react'
import Header from '../../components/Header'

test('Should render Header component correctly.', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />)
    console.log(renderer.getRenderOutput());
    expect(renderer.getRenderOutput()).toMatchSnapshot()
})
