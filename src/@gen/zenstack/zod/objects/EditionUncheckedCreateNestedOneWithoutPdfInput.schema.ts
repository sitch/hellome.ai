/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionCreateOrConnectWithoutPdfInputObjectSchema } from "./EditionCreateOrConnectWithoutPdfInput.schema"
import { EditionCreateWithoutPdfInputObjectSchema } from "./EditionCreateWithoutPdfInput.schema"
import { EditionUncheckedCreateWithoutPdfInputObjectSchema } from "./EditionUncheckedCreateWithoutPdfInput.schema"
import { EditionWhereUniqueInputObjectSchema } from "./EditionWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EditionUncheckedCreateNestedOneWithoutPdfInput,
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
    connect: z.lazy(() => EditionWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const EditionUncheckedCreateNestedOneWithoutPdfInputObjectSchema = Schema
