import { render, screen } from '@testing-library/react'
import Contact from '@/pages/contact'

describe('Contact', () => {
  it('renders a heading', async () => {
    render(<Contact />)

    expect(await screen.findByText('Contact')).toBeInTheDocument()
  })
})
