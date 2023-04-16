import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptPlaceCreateManyInputSchema } from '../inputTypeSchemas/ConceptPlaceCreateManyInputSchema'

export const ConceptPlaceCreateManyArgsSchema: z.ZodType<Prisma.ConceptPlaceCreateManyArgs> = z.object({
  data: z.union([ ConceptPlaceCreateManyInputSchema,ConceptPlaceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default ConceptPlaceCreateManyArgsSchema;
