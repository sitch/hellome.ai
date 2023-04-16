import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPersonWhereUniqueInputSchema } from './ConceptPersonWhereUniqueInputSchema';
import { ConceptPersonCreateWithoutUserInputSchema } from './ConceptPersonCreateWithoutUserInputSchema';
import { ConceptPersonUncheckedCreateWithoutUserInputSchema } from './ConceptPersonUncheckedCreateWithoutUserInputSchema';

export const ConceptPersonCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ConceptPersonCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ConceptPersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ConceptPersonCreateWithoutUserInputSchema),z.lazy(() => ConceptPersonUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default ConceptPersonCreateOrConnectWithoutUserInputSchema;
