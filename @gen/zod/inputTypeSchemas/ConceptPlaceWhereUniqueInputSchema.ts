import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ConceptPlaceWhereUniqueInputSchema: z.ZodType<Prisma.ConceptPlaceWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export default ConceptPlaceWhereUniqueInputSchema;
