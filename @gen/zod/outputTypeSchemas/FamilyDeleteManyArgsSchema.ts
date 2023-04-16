import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FamilyWhereInputSchema } from '../inputTypeSchemas/FamilyWhereInputSchema'

export const FamilyDeleteManyArgsSchema: z.ZodType<Prisma.FamilyDeleteManyArgs> = z.object({
  where: FamilyWhereInputSchema.optional(),
}).strict()

export default FamilyDeleteManyArgsSchema;
