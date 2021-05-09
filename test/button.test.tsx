import * as React from 'react'
import * as reactRender from 'react-test-renderer'
import { Button } from '../src'
describe('Button', () => {
  it('是一个div', () => {
    const json  = reactRender.create(<Button/>).toJSON()
    console.log(json);
    expect(json).toMatchSnapshot()
  })
})