import { z } from 'zod'

export const ConceptScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'type',
  'description',
  'createdAt',
  'updatedAt',
  'userId',
])
