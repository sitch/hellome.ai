import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserCreateManyFaceInputSchema } from './UserCreateManyFaceInputSchema';

export const UserCreateManyFaceInputEnvelopeSchema: z.ZodType<Prisma.UserCreateManyFaceInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserCreateManyFaceInputSchema),z.lazy(() => UserCreateManyFaceInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default UserCreateManyFaceInputEnvelopeSchema;
