/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileCreateOrConnectWithoutPdfInputObjectSchema } from "./CloudFileCreateOrConnectWithoutPdfInput.schema"
import { CloudFileCreateWithoutPdfInputObjectSchema } from "./CloudFileCreateWithoutPdfInput.schema"
import { CloudFileUncheckedCreateWithoutPdfInputObjectSchema } from "./CloudFileUncheckedCreateWithoutPdfInput.schema"
import { CloudFileUncheckedUpdateWithoutPdfInputObjectSchema } from "./CloudFileUncheckedUpdateWithoutPdfInput.schema"
import { CloudFileUpdateWithoutPdfInputObjectSchema } from "./CloudFileUpdateWithoutPdfInput.schema"
import { CloudFileUpsertWithoutPdfInputObjectSchema } from "./CloudFileUpsertWithoutPdfInput.schema"
import { CloudFileWhereUniqueInputObjectSchema } from "./CloudFileWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.CloudFileUpdateOneRequiredWithoutPdfNestedInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => CloudFileCreateWithoutPdfInputObjectSchema),
        z.lazy(() => CloudFileUncheckedCreateWithoutPdfInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CloudFileCreateOrConnectWithoutPdfInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => CloudFileUpsertWithoutPdfInputObjectSchema).optional(),
    connect: z.lazy(() => CloudFileWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => CloudFileUpdateWithoutPdfInputObjectSchema),
        z.lazy(() => CloudFileUncheckedUpdateWithoutPdfInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const CloudFileUpdateOneRequiredWithoutPdfNestedInputObjectSchema =
  Schema
