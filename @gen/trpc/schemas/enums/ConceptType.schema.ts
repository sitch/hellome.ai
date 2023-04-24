import { z } from 'zod'

export const ConceptTypeSchema = z.enum(['person', 'place', 'thing'])
