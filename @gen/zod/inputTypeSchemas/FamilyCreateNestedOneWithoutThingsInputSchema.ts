import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FamilyCreateWithoutThingsInputSchema } from './FamilyCreateWithoutThingsInputSchema';
import { FamilyUncheckedCreateWithoutThingsInputSchema } from './FamilyUncheckedCreateWithoutThingsInputSchema';
import { FamilyCreateOrConnectWithoutThingsInputSchema } from './FamilyCreateOrConnectWithoutThingsInputSchema';
import { FamilyWhereUniqueInputSchema } from './FamilyWhereUniqueInputSchema';

export const FamilyCreateNestedOneWithoutThingsInputSchema: z.ZodType<Prisma.FamilyCreateNestedOneWithoutThingsInput> = z.object({
  create: z.union([ z.lazy(() => FamilyCreateWithoutThingsInputSchema),z.lazy(() => FamilyUncheckedCreateWithoutThingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FamilyCreateOrConnectWithoutThingsInputSchema).optional(),
  connect: z.lazy(() => FamilyWhereUniqueInputSchema).optional()
}).strict();

export default FamilyCreateNestedOneWithoutThingsInputSchema;
