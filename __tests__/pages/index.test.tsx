import { render, screen } from '@testing-library/react'
import Index from '@/pages/index'

describe('Index', () => {
  it('renders a heading', async () => {
    render(<Index />)

    expect(await screen.findByText('Hello')).toBeInTheDocument()
    expect(await screen.findByText('Me')).toBeInTheDocument()
    expect(await screen.findByText('.ai')).toBeInTheDocument()
    expect(await screen.findByText('Learn More')).toBeInTheDocument()
    expect(
      await (await screen.findAllByText('Request Access')).at(0)
    ).toBeInTheDocument()
  })
})
