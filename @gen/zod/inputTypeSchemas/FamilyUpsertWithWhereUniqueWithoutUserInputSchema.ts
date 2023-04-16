import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FamilyWhereUniqueInputSchema } from './FamilyWhereUniqueInputSchema';
import { FamilyUpdateWithoutUserInputSchema } from './FamilyUpdateWithoutUserInputSchema';
import { FamilyUncheckedUpdateWithoutUserInputSchema } from './FamilyUncheckedUpdateWithoutUserInputSchema';
import { FamilyCreateWithoutUserInputSchema } from './FamilyCreateWithoutUserInputSchema';
import { FamilyUncheckedCreateWithoutUserInputSchema } from './FamilyUncheckedCreateWithoutUserInputSchema';

export const FamilyUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.FamilyUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => FamilyWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => FamilyUpdateWithoutUserInputSchema),z.lazy(() => FamilyUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => FamilyCreateWithoutUserInputSchema),z.lazy(() => FamilyUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default FamilyUpsertWithWhereUniqueWithoutUserInputSchema;
