import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptTensorWhereInputSchema } from '../inputTypeSchemas/ConceptTensorWhereInputSchema'

export const ConceptTensorDeleteManyArgsSchema: z.ZodType<Prisma.ConceptTensorDeleteManyArgs> = z.object({
  where: ConceptTensorWhereInputSchema.optional(),
}).strict()

export default ConceptTensorDeleteManyArgsSchema;
