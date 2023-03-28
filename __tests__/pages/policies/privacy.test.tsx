import { render, screen } from '@testing-library/react'
import Privacy from '@/pages/policies/privacy'

describe('Privacy', () => {
  it('renders a heading', async () => {
    render(<Privacy />)

    expect(await screen.findByText('Privacy Policy')).toBeInTheDocument()
  })

  it('renders last updated', async () => {
    render(<Privacy />)

    expect(
      await screen.findByText('Last updated: February 15, 2023')
    ).toBeInTheDocument()
  })
})
