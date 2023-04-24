import { z } from 'zod'
import { ConceptWhereUniqueInputObjectSchema } from './ConceptWhereUniqueInput.schema'
import { ConceptUpdateWithoutPhotosInputObjectSchema } from './ConceptUpdateWithoutPhotosInput.schema'
import { ConceptUncheckedUpdateWithoutPhotosInputObjectSchema } from './ConceptUncheckedUpdateWithoutPhotosInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConceptUpdateWithWhereUniqueWithoutPhotosInput> =
  z
    .object({
      where: z.lazy(() => ConceptWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ConceptUpdateWithoutPhotosInputObjectSchema),
        z.lazy(() => ConceptUncheckedUpdateWithoutPhotosInputObjectSchema),
      ]),
    })
    .strict()

export const ConceptUpdateWithWhereUniqueWithoutPhotosInputObjectSchema = Schema
