import { z } from 'zod'
import { EditionCreateWithoutPdfInputObjectSchema } from './EditionCreateWithoutPdfInput.schema'
import { EditionUncheckedCreateWithoutPdfInputObjectSchema } from './EditionUncheckedCreateWithoutPdfInput.schema'
import { EditionCreateOrConnectWithoutPdfInputObjectSchema } from './EditionCreateOrConnectWithoutPdfInput.schema'
import { EditionUpsertWithoutPdfInputObjectSchema } from './EditionUpsertWithoutPdfInput.schema'
import { EditionWhereUniqueInputObjectSchema } from './EditionWhereUniqueInput.schema'
import { EditionUpdateWithoutPdfInputObjectSchema } from './EditionUpdateWithoutPdfInput.schema'
import { EditionUncheckedUpdateWithoutPdfInputObjectSchema } from './EditionUncheckedUpdateWithoutPdfInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.EditionUncheckedUpdateOneWithoutPdfNestedInput> =
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
      upsert: z.lazy(() => EditionUpsertWithoutPdfInputObjectSchema).optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => EditionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => EditionUpdateWithoutPdfInputObjectSchema),
          z.lazy(() => EditionUncheckedUpdateWithoutPdfInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const EditionUncheckedUpdateOneWithoutPdfNestedInputObjectSchema = Schema
