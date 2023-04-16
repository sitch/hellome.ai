import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { FamilyUpdateManyMutationInputSchema } from '../inputTypeSchemas/FamilyUpdateManyMutationInputSchema'
import { FamilyUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/FamilyUncheckedUpdateManyInputSchema'
import { FamilyWhereInputSchema } from '../inputTypeSchemas/FamilyWhereInputSchema'

export const FamilyUpdateManyArgsSchema: z.ZodType<Prisma.FamilyUpdateManyArgs> = z.object({
  data: z.union([ FamilyUpdateManyMutationInputSchema,FamilyUncheckedUpdateManyInputSchema ]),
  where: FamilyWhereInputSchema.optional(),
}).strict()

export default FamilyUpdateManyArgsSchema;
