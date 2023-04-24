import { z } from 'zod'

export const StoryScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'artistId',
  'authorId',
])
