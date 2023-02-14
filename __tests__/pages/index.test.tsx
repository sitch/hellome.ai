import { render, screen } from '@testing-library/react'
import Index from '@/pages/index'

describe('Index', () => {
  it('renders a heading', () => {
    const props = {}
    render(<Index {...props} />)

    const heading = screen.getByText(/Hello/i)

    expect(heading).toBeInTheDocument()
  })
})
