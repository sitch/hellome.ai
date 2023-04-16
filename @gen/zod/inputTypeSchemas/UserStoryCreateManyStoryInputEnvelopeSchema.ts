import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { UserStoryCreateManyStoryInputSchema } from './UserStoryCreateManyStoryInputSchema';

export const UserStoryCreateManyStoryInputEnvelopeSchema: z.ZodType<Prisma.UserStoryCreateManyStoryInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserStoryCreateManyStoryInputSchema),z.lazy(() => UserStoryCreateManyStoryInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default UserStoryCreateManyStoryInputEnvelopeSchema;
