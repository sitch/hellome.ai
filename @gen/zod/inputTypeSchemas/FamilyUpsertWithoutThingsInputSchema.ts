import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FamilyUpdateWithoutThingsInputSchema } from './FamilyUpdateWithoutThingsInputSchema';
import { FamilyUncheckedUpdateWithoutThingsInputSchema } from './FamilyUncheckedUpdateWithoutThingsInputSchema';
import { FamilyCreateWithoutThingsInputSchema } from './FamilyCreateWithoutThingsInputSchema';
import { FamilyUncheckedCreateWithoutThingsInputSchema } from './FamilyUncheckedCreateWithoutThingsInputSchema';

export const FamilyUpsertWithoutThingsInputSchema: z.ZodType<Prisma.FamilyUpsertWithoutThingsInput> = z.object({
  update: z.union([ z.lazy(() => FamilyUpdateWithoutThingsInputSchema),z.lazy(() => FamilyUncheckedUpdateWithoutThingsInputSchema) ]),
  create: z.union([ z.lazy(() => FamilyCreateWithoutThingsInputSchema),z.lazy(() => FamilyUncheckedCreateWithoutThingsInputSchema) ]),
}).strict();

export default FamilyUpsertWithoutThingsInputSchema;
