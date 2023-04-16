import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptPersonWhereInputSchema } from '../inputTypeSchemas/ConceptPersonWhereInputSchema'

export const ConceptPersonDeleteManyArgsSchema: z.ZodType<Prisma.ConceptPersonDeleteManyArgs> = z.object({
  where: ConceptPersonWhereInputSchema.optional(),
}).strict()

export default ConceptPersonDeleteManyArgsSchema;
