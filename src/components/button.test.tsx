/**
 * @jest-environment jsdom
 */

import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from './button'

describe('Given i am on the home page ', () => {
  describe('When i click on the login button', () => {
    test('Then the label should change to "Chargement..."', async () => {
      render(<Button />)
      const button = screen.getByRole('button')
      expect(button.textContent).toBe('Se connecter')
      await userEvent.click(button)
      expect(button.textContent).toBe('Chargement...')
    })
  })
})
