import React from 'react'

import { render, screen, testA11y } from 'utils/test'

import { Button } from 'components/Button'

describe('Button Component', () => {
  it('should render properly', () => {
    render(<Button>Hello Button</Button>)

    const button = screen.queryByRole('button')
    expect(button).toBeInTheDocument()
    expect(button.innerHTML).toEqual('Hello Button')
  })
  it('passes a11y test', async () => {
    await testA11y(<Button children="hello" variant="secondary" />)
  })
})
