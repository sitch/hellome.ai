import { z } from 'zod'

export const PageScalarFieldEnumSchema = z.enum([
  'id',
  'status',
  'type',
  'pageNumber',
  'createdAt',
  'updatedAt',
  'storyId',
])
