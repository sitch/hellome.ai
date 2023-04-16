import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FamilyWhereUniqueInputSchema } from './FamilyWhereUniqueInputSchema';
import { FamilyCreateWithoutThingsInputSchema } from './FamilyCreateWithoutThingsInputSchema';
import { FamilyUncheckedCreateWithoutThingsInputSchema } from './FamilyUncheckedCreateWithoutThingsInputSchema';

export const FamilyCreateOrConnectWithoutThingsInputSchema: z.ZodType<Prisma.FamilyCreateOrConnectWithoutThingsInput> = z.object({
  where: z.lazy(() => FamilyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FamilyCreateWithoutThingsInputSchema),z.lazy(() => FamilyUncheckedCreateWithoutThingsInputSchema) ]),
}).strict();

export default FamilyCreateOrConnectWithoutThingsInputSchema;
