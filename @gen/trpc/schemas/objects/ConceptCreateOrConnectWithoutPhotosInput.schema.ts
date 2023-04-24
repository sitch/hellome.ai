import { z } from 'zod'
import { ConceptWhereUniqueInputObjectSchema } from './ConceptWhereUniqueInput.schema'
import { ConceptCreateWithoutPhotosInputObjectSchema } from './ConceptCreateWithoutPhotosInput.schema'
import { ConceptUncheckedCreateWithoutPhotosInputObjectSchema } from './ConceptUncheckedCreateWithoutPhotosInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.ConceptCreateOrConnectWithoutPhotosInput> = z
  .object({
    where: z.lazy(() => ConceptWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ConceptCreateWithoutPhotosInputObjectSchema),
      z.lazy(() => ConceptUncheckedCreateWithoutPhotosInputObjectSchema),
    ]),
  })
  .strict()

export const ConceptCreateOrConnectWithoutPhotosInputObjectSchema = Schema
