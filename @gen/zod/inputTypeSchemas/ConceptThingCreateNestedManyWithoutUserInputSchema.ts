import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ConceptThingCreateWithoutUserInputSchema } from './ConceptThingCreateWithoutUserInputSchema';
import { ConceptThingUncheckedCreateWithoutUserInputSchema } from './ConceptThingUncheckedCreateWithoutUserInputSchema';
import { ConceptThingCreateOrConnectWithoutUserInputSchema } from './ConceptThingCreateOrConnectWithoutUserInputSchema';
import { ConceptThingCreateManyUserInputEnvelopeSchema } from './ConceptThingCreateManyUserInputEnvelopeSchema';
import { ConceptThingWhereUniqueInputSchema } from './ConceptThingWhereUniqueInputSchema';

export const ConceptThingCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ConceptThingCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ConceptThingCreateWithoutUserInputSchema),z.lazy(() => ConceptThingCreateWithoutUserInputSchema).array(),z.lazy(() => ConceptThingUncheckedCreateWithoutUserInputSchema),z.lazy(() => ConceptThingUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ConceptThingCreateOrConnectWithoutUserInputSchema),z.lazy(() => ConceptThingCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ConceptThingCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ConceptThingWhereUniqueInputSchema),z.lazy(() => ConceptThingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ConceptThingCreateNestedManyWithoutUserInputSchema;
