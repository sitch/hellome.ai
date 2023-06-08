/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionCreateWithoutPdfInputObjectSchema } from "./EditionCreateWithoutPdfInput.schema"
import { EditionUncheckedCreateWithoutPdfInputObjectSchema } from "./EditionUncheckedCreateWithoutPdfInput.schema"
import { EditionWhereUniqueInputObjectSchema } from "./EditionWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EditionCreateOrConnectWithoutPdfInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => EditionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EditionCreateWithoutPdfInputObjectSchema),
      z.lazy(() => EditionUncheckedCreateWithoutPdfInputObjectSchema),
    ]),
  })
  .strict()

export const EditionCreateOrConnectWithoutPdfInputObjectSchema = Schema
