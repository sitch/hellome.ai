import { z } from 'zod'
import { ConceptWhereUniqueInputObjectSchema } from './ConceptWhereUniqueInput.schema'
import { ConceptCreateWithoutUserInputObjectSchema } from './ConceptCreateWithoutUserInput.schema'
import { ConceptUncheckedCreateWithoutUserInputObjectSchema } from './ConceptUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConceptCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => ConceptWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ConceptCreateWithoutUserInputObjectSchema),
      z.lazy(() => ConceptUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const ConceptCreateOrConnectWithoutUserInputObjectSchema = Schema
