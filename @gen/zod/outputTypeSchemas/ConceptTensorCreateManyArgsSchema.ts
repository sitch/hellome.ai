import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptTensorCreateManyInputSchema } from '../inputTypeSchemas/ConceptTensorCreateManyInputSchema'

export const ConceptTensorCreateManyArgsSchema: z.ZodType<Prisma.ConceptTensorCreateManyArgs> = z.object({
  data: z.union([ ConceptTensorCreateManyInputSchema,ConceptTensorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default ConceptTensorCreateManyArgsSchema;
