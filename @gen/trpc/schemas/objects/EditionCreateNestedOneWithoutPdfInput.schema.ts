import { EditionCreateOrConnectWithoutPdfInputObjectSchema } from './EditionCreateOrConnectWithoutPdfInput.schema'
import { EditionCreateWithoutPdfInputObjectSchema } from './EditionCreateWithoutPdfInput.schema'
import { EditionUncheckedCreateWithoutPdfInputObjectSchema } from './EditionUncheckedCreateWithoutPdfInput.schema'
import { EditionWhereUniqueInputObjectSchema } from './EditionWhereUniqueInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.EditionCreateNestedOneWithoutPdfInput> = z
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

export const EditionCreateNestedOneWithoutPdfInputObjectSchema = Schema
