import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptTensorUpdateManyMutationInputSchema } from '../inputTypeSchemas/ConceptTensorUpdateManyMutationInputSchema'
import { ConceptTensorUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ConceptTensorUncheckedUpdateManyInputSchema'
import { ConceptTensorWhereInputSchema } from '../inputTypeSchemas/ConceptTensorWhereInputSchema'

export const ConceptTensorUpdateManyArgsSchema: z.ZodType<Prisma.ConceptTensorUpdateManyArgs> = z.object({
  data: z.union([ ConceptTensorUpdateManyMutationInputSchema,ConceptTensorUncheckedUpdateManyInputSchema ]),
  where: ConceptTensorWhereInputSchema.optional(),
}).strict()

export default ConceptTensorUpdateManyArgsSchema;
