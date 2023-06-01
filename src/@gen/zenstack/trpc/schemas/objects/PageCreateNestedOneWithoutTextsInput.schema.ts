/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageCreateOrConnectWithoutTextsInputObjectSchema } from "./PageCreateOrConnectWithoutTextsInput.schema"
import { PageCreateWithoutTextsInputObjectSchema } from "./PageCreateWithoutTextsInput.schema"
import { PageUncheckedCreateWithoutTextsInputObjectSchema } from "./PageUncheckedCreateWithoutTextsInput.schema"
import { PageWhereUniqueInputObjectSchema } from "./PageWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageCreateNestedOneWithoutTextsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => PageCreateWithoutTextsInputObjectSchema),
        z.lazy(() => PageUncheckedCreateWithoutTextsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PageCreateOrConnectWithoutTextsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => PageWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const PageCreateNestedOneWithoutTextsInputObjectSchema = Schema
