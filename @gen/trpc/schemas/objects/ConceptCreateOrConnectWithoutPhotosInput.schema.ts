import { ConceptCreateWithoutPhotosInputObjectSchema } from './ConceptCreateWithoutPhotosInput.schema'
import { ConceptUncheckedCreateWithoutPhotosInputObjectSchema } from './ConceptUncheckedCreateWithoutPhotosInput.schema'
import { ConceptWhereUniqueInputObjectSchema } from './ConceptWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
