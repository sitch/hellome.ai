import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const FamilyWhereUniqueInputSchema: z.ZodType<Prisma.FamilyWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export default FamilyWhereUniqueInputSchema;
