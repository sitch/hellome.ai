import { render, screen } from '@testing-library/react'
import Index from '@/pages/index'

describe('Index', () => {
  it('renders a heading', async () => {
    render(<Index />)

    // Brand
    expect(await screen.findByText('Hello')).toBeInTheDocument()
    expect(await screen.findByText('Me')).toBeInTheDocument()
    expect(await screen.findByText('.ai')).toBeInTheDocument()

    // Sections
    expect(
      (await screen.findAllByText('Join the Waitlist')).at(0)
    ).toBeInTheDocument()

    // TODO: Re-Enable
    // expect(await screen.findByText('Learn More')).toBeInTheDocument()
  })
})
