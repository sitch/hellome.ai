import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FamilyWhereUniqueInputSchema } from './FamilyWhereUniqueInputSchema';
import { FamilyCreateWithoutPlacesInputSchema } from './FamilyCreateWithoutPlacesInputSchema';
import { FamilyUncheckedCreateWithoutPlacesInputSchema } from './FamilyUncheckedCreateWithoutPlacesInputSchema';

export const FamilyCreateOrConnectWithoutPlacesInputSchema: z.ZodType<Prisma.FamilyCreateOrConnectWithoutPlacesInput> = z.object({
  where: z.lazy(() => FamilyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FamilyCreateWithoutPlacesInputSchema),z.lazy(() => FamilyUncheckedCreateWithoutPlacesInputSchema) ]),
}).strict();

export default FamilyCreateOrConnectWithoutPlacesInputSchema;
