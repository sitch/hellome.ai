import { EditionCreateWithoutPdfInputObjectSchema } from './EditionCreateWithoutPdfInput.schema'
import { EditionUncheckedCreateWithoutPdfInputObjectSchema } from './EditionUncheckedCreateWithoutPdfInput.schema'
import { EditionUncheckedUpdateWithoutPdfInputObjectSchema } from './EditionUncheckedUpdateWithoutPdfInput.schema'
import { EditionUpdateWithoutPdfInputObjectSchema } from './EditionUpdateWithoutPdfInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.EditionUpsertWithoutPdfInput> = z
  .object({
    update: z.union([
      z.lazy(() => EditionUpdateWithoutPdfInputObjectSchema),
      z.lazy(() => EditionUncheckedUpdateWithoutPdfInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EditionCreateWithoutPdfInputObjectSchema),
      z.lazy(() => EditionUncheckedCreateWithoutPdfInputObjectSchema),
    ]),
  })
  .strict()

export const EditionUpsertWithoutPdfInputObjectSchema = Schema
