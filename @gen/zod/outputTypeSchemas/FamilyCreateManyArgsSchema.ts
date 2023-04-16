import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FamilyCreateManyInputSchema } from '../inputTypeSchemas/FamilyCreateManyInputSchema'

export const FamilyCreateManyArgsSchema: z.ZodType<Prisma.FamilyCreateManyArgs> = z.object({
  data: z.union([ FamilyCreateManyInputSchema,FamilyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default FamilyCreateManyArgsSchema;
