/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileCreateWithoutPdfInputObjectSchema } from "./CloudFileCreateWithoutPdfInput.schema"
import { CloudFileUncheckedCreateWithoutPdfInputObjectSchema } from "./CloudFileUncheckedCreateWithoutPdfInput.schema"
import { CloudFileUncheckedUpdateWithoutPdfInputObjectSchema } from "./CloudFileUncheckedUpdateWithoutPdfInput.schema"
import { CloudFileUpdateWithoutPdfInputObjectSchema } from "./CloudFileUpdateWithoutPdfInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.CloudFileUpsertWithoutPdfInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => CloudFileUpdateWithoutPdfInputObjectSchema),
      z.lazy(() => CloudFileUncheckedUpdateWithoutPdfInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CloudFileCreateWithoutPdfInputObjectSchema),
      z.lazy(() => CloudFileUncheckedCreateWithoutPdfInputObjectSchema),
    ]),
  })
  .strict()

export const CloudFileUpsertWithoutPdfInputObjectSchema = Schema
