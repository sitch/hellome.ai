import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const FamilyCreateManyInputSchema: z.ZodType<Prisma.FamilyCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default FamilyCreateManyInputSchema;
