import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FaceMeshCreateManyInputSchema } from '../inputTypeSchemas/FaceMeshCreateManyInputSchema'

export const FaceMeshCreateManyArgsSchema: z.ZodType<Prisma.FaceMeshCreateManyArgs> = z.object({
  data: z.union([ FaceMeshCreateManyInputSchema,FaceMeshCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default FaceMeshCreateManyArgsSchema;
