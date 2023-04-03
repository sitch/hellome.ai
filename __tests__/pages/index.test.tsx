import { render, screen } from '@testing-library/react'
import Index from '@/pages/index'

// dynamic <Link />
// See: https://github.com/vercel/next.js/issues/43769#issuecomment-1371647893
import { createContext } from 'react'
jest.mock('next/dist/shared/lib/router-context.js', () => ({
  RouterContext: createContext(true),
}))

describe('Index', () => {
  it('renders a heading', async () => {
    render(<Index />)

    // Brand
    expect(await screen.findByText('Hello')).toBeInTheDocument()
    expect(await screen.findByText('Me')).toBeInTheDocument()
    expect(await screen.findByText('.ai')).toBeInTheDocument()

    // Sections
    // expect(
    //   (await screen.findAllByText('Join the Waitlist')).at(0)
    // ).toBeInTheDocument()

    // TODO: Re-Enable
    // expect(await screen.findByText('Learn More')).toBeInTheDocument()
  })
})
