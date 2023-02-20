import { render, screen } from '@testing-library/react'
import Faq from '@/pages/faq'

describe('Faq', () => {
  it('renders a heading', async () => {
    render(<Faq />)

    expect(await screen.findByText('FAQ')).toBeInTheDocument()
  })
})
