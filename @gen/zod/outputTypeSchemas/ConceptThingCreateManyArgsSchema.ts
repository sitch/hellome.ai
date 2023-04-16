import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptThingCreateManyInputSchema } from '../inputTypeSchemas/ConceptThingCreateManyInputSchema'

export const ConceptThingCreateManyArgsSchema: z.ZodType<Prisma.ConceptThingCreateManyArgs> = z.object({
  data: z.union([ ConceptThingCreateManyInputSchema,ConceptThingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default ConceptThingCreateManyArgsSchema;
