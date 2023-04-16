import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FamilyCreateWithoutThingsInputSchema } from './FamilyCreateWithoutThingsInputSchema';
import { FamilyUncheckedCreateWithoutThingsInputSchema } from './FamilyUncheckedCreateWithoutThingsInputSchema';
import { FamilyCreateOrConnectWithoutThingsInputSchema } from './FamilyCreateOrConnectWithoutThingsInputSchema';
import { FamilyUpsertWithoutThingsInputSchema } from './FamilyUpsertWithoutThingsInputSchema';
import { FamilyWhereUniqueInputSchema } from './FamilyWhereUniqueInputSchema';
import { FamilyUpdateWithoutThingsInputSchema } from './FamilyUpdateWithoutThingsInputSchema';
import { FamilyUncheckedUpdateWithoutThingsInputSchema } from './FamilyUncheckedUpdateWithoutThingsInputSchema';

export const FamilyUpdateOneRequiredWithoutThingsNestedInputSchema: z.ZodType<Prisma.FamilyUpdateOneRequiredWithoutThingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => FamilyCreateWithoutThingsInputSchema),z.lazy(() => FamilyUncheckedCreateWithoutThingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FamilyCreateOrConnectWithoutThingsInputSchema).optional(),
  upsert: z.lazy(() => FamilyUpsertWithoutThingsInputSchema).optional(),
  connect: z.lazy(() => FamilyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FamilyUpdateWithoutThingsInputSchema),z.lazy(() => FamilyUncheckedUpdateWithoutThingsInputSchema) ]).optional(),
}).strict();

export default FamilyUpdateOneRequiredWithoutThingsNestedInputSchema;
