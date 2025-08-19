import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import { Button } from '../App'

test('Change button label when it is clicked', async () => {
  render(<Button />)
  const button = screen.getByRole('button')
  expect(button.textContent).toBe('Se connecter')
  await userEvent.click(button)
  expect(button.textContent).toBe('Chargement...')
})
