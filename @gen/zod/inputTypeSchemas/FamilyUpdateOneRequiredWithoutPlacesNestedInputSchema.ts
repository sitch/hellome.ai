import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FamilyCreateWithoutPlacesInputSchema } from './FamilyCreateWithoutPlacesInputSchema';
import { FamilyUncheckedCreateWithoutPlacesInputSchema } from './FamilyUncheckedCreateWithoutPlacesInputSchema';
import { FamilyCreateOrConnectWithoutPlacesInputSchema } from './FamilyCreateOrConnectWithoutPlacesInputSchema';
import { FamilyUpsertWithoutPlacesInputSchema } from './FamilyUpsertWithoutPlacesInputSchema';
import { FamilyWhereUniqueInputSchema } from './FamilyWhereUniqueInputSchema';
import { FamilyUpdateWithoutPlacesInputSchema } from './FamilyUpdateWithoutPlacesInputSchema';
import { FamilyUncheckedUpdateWithoutPlacesInputSchema } from './FamilyUncheckedUpdateWithoutPlacesInputSchema';

export const FamilyUpdateOneRequiredWithoutPlacesNestedInputSchema: z.ZodType<Prisma.FamilyUpdateOneRequiredWithoutPlacesNestedInput> = z.object({
  create: z.union([ z.lazy(() => FamilyCreateWithoutPlacesInputSchema),z.lazy(() => FamilyUncheckedCreateWithoutPlacesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FamilyCreateOrConnectWithoutPlacesInputSchema).optional(),
  upsert: z.lazy(() => FamilyUpsertWithoutPlacesInputSchema).optional(),
  connect: z.lazy(() => FamilyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FamilyUpdateWithoutPlacesInputSchema),z.lazy(() => FamilyUncheckedUpdateWithoutPlacesInputSchema) ]).optional(),
}).strict();

export default FamilyUpdateOneRequiredWithoutPlacesNestedInputSchema;
