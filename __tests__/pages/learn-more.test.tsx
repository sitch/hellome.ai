import { render, screen } from '@testing-library/react'
import LearnMore from '@/pages/learn-more'

describe('LearnMore', () => {
  it('renders a heading', async () => {
    render(<LearnMore />)

    expect(await screen.findByText('Learn More')).toBeInTheDocument()
  })
})
