import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const ConceptPersonCreateWithoutUserInputSchema: z.ZodType<Prisma.ConceptPersonCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ConceptPersonCreateWithoutUserInputSchema;
