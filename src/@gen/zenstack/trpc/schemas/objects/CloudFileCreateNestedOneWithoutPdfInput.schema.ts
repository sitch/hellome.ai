/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileCreateOrConnectWithoutPdfInputObjectSchema } from "./CloudFileCreateOrConnectWithoutPdfInput.schema"
import { CloudFileCreateWithoutPdfInputObjectSchema } from "./CloudFileCreateWithoutPdfInput.schema"
import { CloudFileUncheckedCreateWithoutPdfInputObjectSchema } from "./CloudFileUncheckedCreateWithoutPdfInput.schema"
import { CloudFileWhereUniqueInputObjectSchema } from "./CloudFileWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.CloudFileCreateNestedOneWithoutPdfInput,
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
    connect: z.lazy(() => CloudFileWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const CloudFileCreateNestedOneWithoutPdfInputObjectSchema = Schema
