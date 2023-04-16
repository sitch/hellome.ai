import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FamilyCreateWithoutPlacesInputSchema } from './FamilyCreateWithoutPlacesInputSchema';
import { FamilyUncheckedCreateWithoutPlacesInputSchema } from './FamilyUncheckedCreateWithoutPlacesInputSchema';
import { FamilyCreateOrConnectWithoutPlacesInputSchema } from './FamilyCreateOrConnectWithoutPlacesInputSchema';
import { FamilyWhereUniqueInputSchema } from './FamilyWhereUniqueInputSchema';

export const FamilyCreateNestedOneWithoutPlacesInputSchema: z.ZodType<Prisma.FamilyCreateNestedOneWithoutPlacesInput> = z.object({
  create: z.union([ z.lazy(() => FamilyCreateWithoutPlacesInputSchema),z.lazy(() => FamilyUncheckedCreateWithoutPlacesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FamilyCreateOrConnectWithoutPlacesInputSchema).optional(),
  connect: z.lazy(() => FamilyWhereUniqueInputSchema).optional()
}).strict();

export default FamilyCreateNestedOneWithoutPlacesInputSchema;
