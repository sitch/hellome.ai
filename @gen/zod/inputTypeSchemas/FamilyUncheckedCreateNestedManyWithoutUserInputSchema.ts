import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FamilyCreateWithoutUserInputSchema } from './FamilyCreateWithoutUserInputSchema';
import { FamilyUncheckedCreateWithoutUserInputSchema } from './FamilyUncheckedCreateWithoutUserInputSchema';
import { FamilyCreateOrConnectWithoutUserInputSchema } from './FamilyCreateOrConnectWithoutUserInputSchema';
import { FamilyWhereUniqueInputSchema } from './FamilyWhereUniqueInputSchema';

export const FamilyUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.FamilyUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => FamilyCreateWithoutUserInputSchema),z.lazy(() => FamilyCreateWithoutUserInputSchema).array(),z.lazy(() => FamilyUncheckedCreateWithoutUserInputSchema),z.lazy(() => FamilyUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FamilyCreateOrConnectWithoutUserInputSchema),z.lazy(() => FamilyCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FamilyWhereUniqueInputSchema),z.lazy(() => FamilyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default FamilyUncheckedCreateNestedManyWithoutUserInputSchema;
