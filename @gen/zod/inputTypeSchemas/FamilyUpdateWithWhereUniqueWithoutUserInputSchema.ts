import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FamilyWhereUniqueInputSchema } from './FamilyWhereUniqueInputSchema';
import { FamilyUpdateWithoutUserInputSchema } from './FamilyUpdateWithoutUserInputSchema';
import { FamilyUncheckedUpdateWithoutUserInputSchema } from './FamilyUncheckedUpdateWithoutUserInputSchema';

export const FamilyUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.FamilyUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => FamilyWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => FamilyUpdateWithoutUserInputSchema),z.lazy(() => FamilyUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default FamilyUpdateWithWhereUniqueWithoutUserInputSchema;
