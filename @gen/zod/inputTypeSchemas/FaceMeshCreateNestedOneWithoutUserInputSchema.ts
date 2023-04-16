import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FaceMeshCreateWithoutUserInputSchema } from './FaceMeshCreateWithoutUserInputSchema';
import { FaceMeshUncheckedCreateWithoutUserInputSchema } from './FaceMeshUncheckedCreateWithoutUserInputSchema';
import { FaceMeshCreateOrConnectWithoutUserInputSchema } from './FaceMeshCreateOrConnectWithoutUserInputSchema';
import { FaceMeshWhereUniqueInputSchema } from './FaceMeshWhereUniqueInputSchema';

export const FaceMeshCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.FaceMeshCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => FaceMeshCreateWithoutUserInputSchema),z.lazy(() => FaceMeshUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => FaceMeshCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => FaceMeshWhereUniqueInputSchema).optional()
}).strict();

export default FaceMeshCreateNestedOneWithoutUserInputSchema;
