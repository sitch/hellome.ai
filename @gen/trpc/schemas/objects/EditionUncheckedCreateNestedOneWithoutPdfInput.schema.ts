import { z } from 'zod'
import { EditionCreateWithoutPdfInputObjectSchema } from './EditionCreateWithoutPdfInput.schema'
import { EditionUncheckedCreateWithoutPdfInputObjectSchema } from './EditionUncheckedCreateWithoutPdfInput.schema'
import { EditionCreateOrConnectWithoutPdfInputObjectSchema } from './EditionCreateOrConnectWithoutPdfInput.schema'
import { EditionWhereUniqueInputObjectSchema } from './EditionWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EditionUncheckedCreateNestedOneWithoutPdfInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EditionCreateWithoutPdfInputObjectSchema),
          z.lazy(() => EditionUncheckedCreateWithoutPdfInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => EditionCreateOrConnectWithoutPdfInputObjectSchema)
        .optional(),
      connect: z.lazy(() => EditionWhereUniqueInputObjectSchema).optional(),
    })
    .strict()

export const EditionUncheckedCreateNestedOneWithoutPdfInputObjectSchema = Schema
