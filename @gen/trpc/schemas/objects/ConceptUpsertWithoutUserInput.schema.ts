import { z } from 'zod'
import { ConceptUpdateWithoutUserInputObjectSchema } from './ConceptUpdateWithoutUserInput.schema'
import { ConceptUncheckedUpdateWithoutUserInputObjectSchema } from './ConceptUncheckedUpdateWithoutUserInput.schema'
import { ConceptCreateWithoutUserInputObjectSchema } from './ConceptCreateWithoutUserInput.schema'
import { ConceptUncheckedCreateWithoutUserInputObjectSchema } from './ConceptUncheckedCreateWithoutUserInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConceptUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => ConceptUpdateWithoutUserInputObjectSchema),
      z.lazy(() => ConceptUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ConceptCreateWithoutUserInputObjectSchema),
      z.lazy(() => ConceptUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const ConceptUpsertWithoutUserInputObjectSchema = Schema
