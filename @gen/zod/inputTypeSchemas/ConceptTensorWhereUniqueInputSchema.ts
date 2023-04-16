import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ConceptTensorWhereUniqueInputSchema: z.ZodType<Prisma.ConceptTensorWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export default ConceptTensorWhereUniqueInputSchema;
