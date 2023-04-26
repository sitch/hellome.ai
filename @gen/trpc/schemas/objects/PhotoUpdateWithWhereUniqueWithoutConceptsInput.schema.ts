import { PhotoUncheckedUpdateWithoutConceptsInputObjectSchema } from './PhotoUncheckedUpdateWithoutConceptsInput.schema'
import { PhotoUpdateWithoutConceptsInputObjectSchema } from './PhotoUpdateWithoutConceptsInput.schema'
import { PhotoWhereUniqueInputObjectSchema } from './PhotoWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.PhotoUpdateWithWhereUniqueWithoutConceptsInput> =
  z
    .object({
      where: z.lazy(() => PhotoWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => PhotoUpdateWithoutConceptsInputObjectSchema),
        z.lazy(() => PhotoUncheckedUpdateWithoutConceptsInputObjectSchema),
      ]),
    })
    .strict()

export const PhotoUpdateWithWhereUniqueWithoutConceptsInputObjectSchema = Schema
