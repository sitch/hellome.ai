import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FaceMeshWhereUniqueInputSchema } from './FaceMeshWhereUniqueInputSchema';
import { FaceMeshCreateWithoutUserInputSchema } from './FaceMeshCreateWithoutUserInputSchema';
import { FaceMeshUncheckedCreateWithoutUserInputSchema } from './FaceMeshUncheckedCreateWithoutUserInputSchema';

export const FaceMeshCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.FaceMeshCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => FaceMeshWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => FaceMeshCreateWithoutUserInputSchema),z.lazy(() => FaceMeshUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default FaceMeshCreateOrConnectWithoutUserInputSchema;
