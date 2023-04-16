import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { FaceMeshUpdateWithoutUserInputSchema } from './FaceMeshUpdateWithoutUserInputSchema';
import { FaceMeshUncheckedUpdateWithoutUserInputSchema } from './FaceMeshUncheckedUpdateWithoutUserInputSchema';
import { FaceMeshCreateWithoutUserInputSchema } from './FaceMeshCreateWithoutUserInputSchema';
import { FaceMeshUncheckedCreateWithoutUserInputSchema } from './FaceMeshUncheckedCreateWithoutUserInputSchema';

export const FaceMeshUpsertWithoutUserInputSchema: z.ZodType<Prisma.FaceMeshUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => FaceMeshUpdateWithoutUserInputSchema),z.lazy(() => FaceMeshUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => FaceMeshCreateWithoutUserInputSchema),z.lazy(() => FaceMeshUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default FaceMeshUpsertWithoutUserInputSchema;
