import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ConceptPersonWhereUniqueInputSchema: z.ZodType<Prisma.ConceptPersonWhereUniqueInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string().optional()
}).strict();

export default ConceptPersonWhereUniqueInputSchema;
