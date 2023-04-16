import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const FaceMeshWhereUniqueInputSchema: z.ZodType<Prisma.FaceMeshWhereUniqueInput> = z.object({
  id: z.string().cuid().optional()
}).strict();

export default FaceMeshWhereUniqueInputSchema;
