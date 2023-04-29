/**
 * @jest-environment node
 */

import { generate } from '@/pdf/generator'

// Run `yarn test`
// Run `yarn test.watch`
// Run `yarn test.watch __tests__/pdf/generator.test.tsx`

// Run `yarn fix` for all linting and style fixes and tests

describe('generator', () => {
  it('renders a pdf', async () => {
    const context = {
      name: 'test',
    }

    const pdf = await generate(context)

    expect(pdf).toEqual({
      ok: true,
      filename: pdf.filename,
    })
  })
})
