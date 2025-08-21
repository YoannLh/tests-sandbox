import { render } from '@testing-library/react'

import { Button } from './button'

it('renders correctly', () => {
  const { asFragment } = render(<Button />)
  expect(asFragment()).toMatchSnapshot()
})
