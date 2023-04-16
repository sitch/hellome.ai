import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ConceptThingWhereUniqueInputSchema: z.ZodType<Prisma.ConceptThingWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export default ConceptThingWhereUniqueInputSchema;
