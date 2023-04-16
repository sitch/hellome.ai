import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ConceptThingWhereInputSchema } from '../inputTypeSchemas/ConceptThingWhereInputSchema'

export const ConceptThingDeleteManyArgsSchema: z.ZodType<Prisma.ConceptThingDeleteManyArgs> = z.object({
  where: ConceptThingWhereInputSchema.optional(),
}).strict()

export default ConceptThingDeleteManyArgsSchema;
