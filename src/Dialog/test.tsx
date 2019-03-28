import * as React from 'react'
import Dialog from './Dialog'
import * as renderer from 'react-test-renderer'

test('Standard button matches', () => {
  const component = renderer.create(<Dialog />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
