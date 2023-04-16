import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FamilyUpdateWithoutPlacesInputSchema } from './FamilyUpdateWithoutPlacesInputSchema';
import { FamilyUncheckedUpdateWithoutPlacesInputSchema } from './FamilyUncheckedUpdateWithoutPlacesInputSchema';
import { FamilyCreateWithoutPlacesInputSchema } from './FamilyCreateWithoutPlacesInputSchema';
import { FamilyUncheckedCreateWithoutPlacesInputSchema } from './FamilyUncheckedCreateWithoutPlacesInputSchema';

export const FamilyUpsertWithoutPlacesInputSchema: z.ZodType<Prisma.FamilyUpsertWithoutPlacesInput> = z.object({
  update: z.union([ z.lazy(() => FamilyUpdateWithoutPlacesInputSchema),z.lazy(() => FamilyUncheckedUpdateWithoutPlacesInputSchema) ]),
  create: z.union([ z.lazy(() => FamilyCreateWithoutPlacesInputSchema),z.lazy(() => FamilyUncheckedCreateWithoutPlacesInputSchema) ]),
}).strict();

export default FamilyUpsertWithoutPlacesInputSchema;
