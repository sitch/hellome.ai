import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Privacy from '@/pages/privacy'

describe('Privacy', () => {
  it('renders a heading', async () => {
    render(<Privacy />)

    await act(async () => {
      expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    })
  })

  it('renders last updated', async () => {
    render(<Privacy />)

    await act(async () => {
      expect(
        screen.getByText('Last updated: February 15, 2023')
      ).toBeInTheDocument()
    })
  })
})
