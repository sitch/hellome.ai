import { z } from 'zod'
import { PhotoWhereUniqueInputObjectSchema } from './PhotoWhereUniqueInput.schema'
import { PhotoUpdateWithoutConceptsInputObjectSchema } from './PhotoUpdateWithoutConceptsInput.schema'
import { PhotoUncheckedUpdateWithoutConceptsInputObjectSchema } from './PhotoUncheckedUpdateWithoutConceptsInput.schema'
import { PhotoCreateWithoutConceptsInputObjectSchema } from './PhotoCreateWithoutConceptsInput.schema'
import { PhotoUncheckedCreateWithoutConceptsInputObjectSchema } from './PhotoUncheckedCreateWithoutConceptsInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoUpsertWithWhereUniqueWithoutConceptsInput> =
  z
    .object({
      where: z.lazy(() => PhotoWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PhotoUpdateWithoutConceptsInputObjectSchema),
        z.lazy(() => PhotoUncheckedUpdateWithoutConceptsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PhotoCreateWithoutConceptsInputObjectSchema),
        z.lazy(() => PhotoUncheckedCreateWithoutConceptsInputObjectSchema),
      ]),
    })
    .strict()

export const PhotoUpsertWithWhereUniqueWithoutConceptsInputObjectSchema = Schema
