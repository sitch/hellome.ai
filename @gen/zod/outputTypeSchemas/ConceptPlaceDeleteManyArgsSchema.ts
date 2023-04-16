import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptPlaceWhereInputSchema } from '../inputTypeSchemas/ConceptPlaceWhereInputSchema'

export const ConceptPlaceDeleteManyArgsSchema: z.ZodType<Prisma.ConceptPlaceDeleteManyArgs> = z.object({
  where: ConceptPlaceWhereInputSchema.optional(),
}).strict()

export default ConceptPlaceDeleteManyArgsSchema;
