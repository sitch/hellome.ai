import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptPersonCreateManyInputSchema } from '../inputTypeSchemas/ConceptPersonCreateManyInputSchema'

export const ConceptPersonCreateManyArgsSchema: z.ZodType<Prisma.ConceptPersonCreateManyArgs> = z.object({
  data: z.union([ ConceptPersonCreateManyInputSchema,ConceptPersonCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default ConceptPersonCreateManyArgsSchema;
