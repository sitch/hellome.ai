import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Index from '@/pages/index'

describe('Index', () => {
  it('renders a heading', async () => {
    render(<Index />)

    await act(async () => {
      expect(screen.getByText('Hello')).toBeInTheDocument()
      expect(screen.getByText('Me')).toBeInTheDocument()
      expect(screen.getByText('.ai')).toBeInTheDocument()
    })
  })
})
