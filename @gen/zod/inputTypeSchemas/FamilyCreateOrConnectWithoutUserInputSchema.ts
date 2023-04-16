import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FamilyWhereUniqueInputSchema } from './FamilyWhereUniqueInputSchema';
import { FamilyCreateWithoutUserInputSchema } from './FamilyCreateWithoutUserInputSchema';
import { FamilyUncheckedCreateWithoutUserInputSchema } from './FamilyUncheckedCreateWithoutUserInputSchema';

export const FamilyCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.FamilyCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => FamilyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FamilyCreateWithoutUserInputSchema),z.lazy(() => FamilyUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default FamilyCreateOrConnectWithoutUserInputSchema;
