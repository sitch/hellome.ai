import { generate } from '@/pdf/generator'

describe('generator', () => {
  it('renders a pdf', async () => {
    const context = {
      name: 'test',
    }

    const pdf = generate(context)

    expect(pdf).toEqual({
      name: context.name,
    })
  })
})
