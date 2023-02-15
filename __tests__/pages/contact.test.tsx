import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Contact from '@/pages/contact'

describe('Contact', () => {
  it('renders a heading', async () => {
    render(<Contact />)

    await act(async () => {
      expect(screen.getByText('Contact')).toBeInTheDocument()
    })
  })
})
