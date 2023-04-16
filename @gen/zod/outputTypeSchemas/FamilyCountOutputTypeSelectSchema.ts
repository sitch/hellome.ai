import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const FamilyCountOutputTypeSelectSchema: z.ZodType<Prisma.FamilyCountOutputTypeSelect> = z.object({
  user: z.boolean().optional(),
  places: z.boolean().optional(),
  things: z.boolean().optional(),
}).strict();

export default FamilyCountOutputTypeSelectSchema;
