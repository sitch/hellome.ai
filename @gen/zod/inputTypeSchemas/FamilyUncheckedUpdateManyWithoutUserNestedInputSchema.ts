import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FamilyCreateWithoutUserInputSchema } from './FamilyCreateWithoutUserInputSchema';
import { FamilyUncheckedCreateWithoutUserInputSchema } from './FamilyUncheckedCreateWithoutUserInputSchema';
import { FamilyCreateOrConnectWithoutUserInputSchema } from './FamilyCreateOrConnectWithoutUserInputSchema';
import { FamilyUpsertWithWhereUniqueWithoutUserInputSchema } from './FamilyUpsertWithWhereUniqueWithoutUserInputSchema';
import { FamilyWhereUniqueInputSchema } from './FamilyWhereUniqueInputSchema';
import { FamilyUpdateWithWhereUniqueWithoutUserInputSchema } from './FamilyUpdateWithWhereUniqueWithoutUserInputSchema';
import { FamilyUpdateManyWithWhereWithoutUserInputSchema } from './FamilyUpdateManyWithWhereWithoutUserInputSchema';
import { FamilyScalarWhereInputSchema } from './FamilyScalarWhereInputSchema';

export const FamilyUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.FamilyUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => FamilyCreateWithoutUserInputSchema),z.lazy(() => FamilyCreateWithoutUserInputSchema).array(),z.lazy(() => FamilyUncheckedCreateWithoutUserInputSchema),z.lazy(() => FamilyUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => FamilyCreateOrConnectWithoutUserInputSchema),z.lazy(() => FamilyCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => FamilyUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => FamilyUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => FamilyWhereUniqueInputSchema),z.lazy(() => FamilyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => FamilyWhereUniqueInputSchema),z.lazy(() => FamilyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => FamilyWhereUniqueInputSchema),z.lazy(() => FamilyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => FamilyWhereUniqueInputSchema),z.lazy(() => FamilyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => FamilyUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => FamilyUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => FamilyUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => FamilyUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => FamilyScalarWhereInputSchema),z.lazy(() => FamilyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default FamilyUncheckedUpdateManyWithoutUserNestedInputSchema;
