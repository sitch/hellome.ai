/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionCreateOrConnectWithoutPdfInputObjectSchema } from "./EditionCreateOrConnectWithoutPdfInput.schema"
import { EditionCreateWithoutPdfInputObjectSchema } from "./EditionCreateWithoutPdfInput.schema"
import { EditionUncheckedCreateWithoutPdfInputObjectSchema } from "./EditionUncheckedCreateWithoutPdfInput.schema"
import { EditionUncheckedUpdateWithoutPdfInputObjectSchema } from "./EditionUncheckedUpdateWithoutPdfInput.schema"
import { EditionUpdateWithoutPdfInputObjectSchema } from "./EditionUpdateWithoutPdfInput.schema"
import { EditionUpsertWithoutPdfInputObjectSchema } from "./EditionUpsertWithoutPdfInput.schema"
import { EditionWhereUniqueInputObjectSchema } from "./EditionWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EditionUpdateOneWithoutPdfNestedInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
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

export const EditionUpdateOneWithoutPdfNestedInputObjectSchema = Schema
