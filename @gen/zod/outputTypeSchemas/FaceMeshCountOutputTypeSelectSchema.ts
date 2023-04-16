import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const FaceMeshCountOutputTypeSelectSchema: z.ZodType<Prisma.FaceMeshCountOutputTypeSelect> = z.object({
  User: z.boolean().optional(),
}).strict();

export default FaceMeshCountOutputTypeSelectSchema;
