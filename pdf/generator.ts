type GenerateProps = {
  name: string
}

export const generate = ({ name }: GenerateProps) => {
  return {
    name,
    dimensions: '8x8',
  }
}
