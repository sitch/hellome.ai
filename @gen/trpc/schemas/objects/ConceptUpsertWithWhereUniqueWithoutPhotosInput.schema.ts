import { z } from 'zod'
import { ConceptWhereUniqueInputObjectSchema } from './ConceptWhereUniqueInput.schema'
import { ConceptUpdateWithoutPhotosInputObjectSchema } from './ConceptUpdateWithoutPhotosInput.schema'
import { ConceptUncheckedUpdateWithoutPhotosInputObjectSchema } from './ConceptUncheckedUpdateWithoutPhotosInput.schema'
import { ConceptCreateWithoutPhotosInputObjectSchema } from './ConceptCreateWithoutPhotosInput.schema'
import { ConceptUncheckedCreateWithoutPhotosInputObjectSchema } from './ConceptUncheckedCreateWithoutPhotosInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConceptUpsertWithWhereUniqueWithoutPhotosInput> =
  z
    .object({
      where: z.lazy(() => ConceptWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ConceptUpdateWithoutPhotosInputObjectSchema),
        z.lazy(() => ConceptUncheckedUpdateWithoutPhotosInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ConceptCreateWithoutPhotosInputObjectSchema),
        z.lazy(() => ConceptUncheckedCreateWithoutPhotosInputObjectSchema),
      ]),
    })
    .strict()

export const ConceptUpsertWithWhereUniqueWithoutPhotosInputObjectSchema = Schema
