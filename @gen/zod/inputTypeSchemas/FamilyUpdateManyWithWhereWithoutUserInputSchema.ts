import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FamilyScalarWhereInputSchema } from './FamilyScalarWhereInputSchema';
import { FamilyUpdateManyMutationInputSchema } from './FamilyUpdateManyMutationInputSchema';
import { FamilyUncheckedUpdateManyWithoutFamiliesInputSchema } from './FamilyUncheckedUpdateManyWithoutFamiliesInputSchema';

export const FamilyUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.FamilyUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => FamilyScalarWhereInputSchema),
  data: z.union([ z.lazy(() => FamilyUpdateManyMutationInputSchema),z.lazy(() => FamilyUncheckedUpdateManyWithoutFamiliesInputSchema) ]),
}).strict();

export default FamilyUpdateManyWithWhereWithoutUserInputSchema;
