import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptPersonCreateWithoutUserInputSchema } from './ConceptPersonCreateWithoutUserInputSchema';
import { ConceptPersonUncheckedCreateWithoutUserInputSchema } from './ConceptPersonUncheckedCreateWithoutUserInputSchema';
import { ConceptPersonCreateOrConnectWithoutUserInputSchema } from './ConceptPersonCreateOrConnectWithoutUserInputSchema';
import { ConceptPersonWhereUniqueInputSchema } from './ConceptPersonWhereUniqueInputSchema';

export const ConceptPersonCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.ConceptPersonCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ConceptPersonCreateWithoutUserInputSchema),z.lazy(() => ConceptPersonUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ConceptPersonCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => ConceptPersonWhereUniqueInputSchema).optional()
}).strict();

export default ConceptPersonCreateNestedOneWithoutUserInputSchema;
