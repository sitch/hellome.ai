import { z } from 'zod'
import { PhotoWhereUniqueInputObjectSchema } from './PhotoWhereUniqueInput.schema'
import { PhotoUpdateWithoutConceptsInputObjectSchema } from './PhotoUpdateWithoutConceptsInput.schema'
import { PhotoUncheckedUpdateWithoutConceptsInputObjectSchema } from './PhotoUncheckedUpdateWithoutConceptsInput.schema'

import type { Prisma } from '@prisma/client'

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
