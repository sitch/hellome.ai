import { z } from 'zod'
import { ConceptCreateWithoutUserInputObjectSchema } from './ConceptCreateWithoutUserInput.schema'
import { ConceptUncheckedCreateWithoutUserInputObjectSchema } from './ConceptUncheckedCreateWithoutUserInput.schema'
import { ConceptCreateOrConnectWithoutUserInputObjectSchema } from './ConceptCreateOrConnectWithoutUserInput.schema'
import { ConceptWhereUniqueInputObjectSchema } from './ConceptWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConceptUncheckedCreateNestedOneWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ConceptCreateWithoutUserInputObjectSchema),
          z.lazy(() => ConceptUncheckedCreateWithoutUserInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ConceptCreateOrConnectWithoutUserInputObjectSchema)
        .optional(),
      connect: z.lazy(() => ConceptWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const ConceptUncheckedCreateNestedOneWithoutUserInputObjectSchema =
  Schema
