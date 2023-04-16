import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FaceMeshCreateWithoutUserInputSchema } from './FaceMeshCreateWithoutUserInputSchema';
import { FaceMeshUncheckedCreateWithoutUserInputSchema } from './FaceMeshUncheckedCreateWithoutUserInputSchema';
import { FaceMeshCreateOrConnectWithoutUserInputSchema } from './FaceMeshCreateOrConnectWithoutUserInputSchema';
import { FaceMeshUpsertWithoutUserInputSchema } from './FaceMeshUpsertWithoutUserInputSchema';
import { FaceMeshWhereUniqueInputSchema } from './FaceMeshWhereUniqueInputSchema';
import { FaceMeshUpdateWithoutUserInputSchema } from './FaceMeshUpdateWithoutUserInputSchema';
import { FaceMeshUncheckedUpdateWithoutUserInputSchema } from './FaceMeshUncheckedUpdateWithoutUserInputSchema';

export const FaceMeshUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.FaceMeshUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => FaceMeshCreateWithoutUserInputSchema),z.lazy(() => FaceMeshUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FaceMeshCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => FaceMeshUpsertWithoutUserInputSchema).optional(),
  disconnect: z.boolean().optional(),
  delete: z.boolean().optional(),
  connect: z.lazy(() => FaceMeshWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => FaceMeshUpdateWithoutUserInputSchema),z.lazy(() => FaceMeshUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default FaceMeshUpdateOneWithoutUserNestedInputSchema;
