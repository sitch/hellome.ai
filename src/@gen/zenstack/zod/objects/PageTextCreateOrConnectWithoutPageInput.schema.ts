/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateWithoutPageInputObjectSchema } from "./PageTextCreateWithoutPageInput.schema"
import { PageTextUncheckedCreateWithoutPageInputObjectSchema } from "./PageTextUncheckedCreateWithoutPageInput.schema"
import { PageTextWhereUniqueInputObjectSchema } from "./PageTextWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageTextCreateOrConnectWithoutPageInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PageTextCreateWithoutPageInputObjectSchema),
      z.lazy(() => PageTextUncheckedCreateWithoutPageInputObjectSchema),
    ]),
  })
  .strict()

export const PageTextCreateOrConnectWithoutPageInputObjectSchema = Schema
