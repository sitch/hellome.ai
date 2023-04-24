import { z } from 'zod'
import { ConceptCreateWithoutUserInputObjectSchema } from './ConceptCreateWithoutUserInput.schema'
import { ConceptUncheckedCreateWithoutUserInputObjectSchema } from './ConceptUncheckedCreateWithoutUserInput.schema'
import { ConceptCreateOrConnectWithoutUserInputObjectSchema } from './ConceptCreateOrConnectWithoutUserInput.schema'
import { ConceptUpsertWithoutUserInputObjectSchema } from './ConceptUpsertWithoutUserInput.schema'
import { ConceptWhereUniqueInputObjectSchema } from './ConceptWhereUniqueInput.schema'
import { ConceptUpdateWithoutUserInputObjectSchema } from './ConceptUpdateWithoutUserInput.schema'
import { ConceptUncheckedUpdateWithoutUserInputObjectSchema } from './ConceptUncheckedUpdateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConceptUncheckedUpdateOneWithoutUserNestedInput> =
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
      upsert: z
        .lazy(() => ConceptUpsertWithoutUserInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => ConceptWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => ConceptUpdateWithoutUserInputObjectSchema),
          z.lazy(() => ConceptUncheckedUpdateWithoutUserInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const ConceptUncheckedUpdateOneWithoutUserNestedInputObjectSchema =
  Schema
