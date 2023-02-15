import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import LearnMore from '@/pages/learn-more'

describe('LearnMore', () => {
  it('renders a heading', async () => {
    render(<LearnMore />)

    await act(async () => {
      expect(screen.getByText('Learn More')).toBeInTheDocument()
    })
  })
})
