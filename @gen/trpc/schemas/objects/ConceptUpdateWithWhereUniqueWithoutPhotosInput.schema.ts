import { ConceptUncheckedUpdateWithoutPhotosInputObjectSchema } from './ConceptUncheckedUpdateWithoutPhotosInput.schema'
import { ConceptUpdateWithoutPhotosInputObjectSchema } from './ConceptUpdateWithoutPhotosInput.schema'
import { ConceptWhereUniqueInputObjectSchema } from './ConceptWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
