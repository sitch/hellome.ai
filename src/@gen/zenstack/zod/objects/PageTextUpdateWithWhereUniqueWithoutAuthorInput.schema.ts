/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextUncheckedUpdateWithoutAuthorInputObjectSchema } from "./PageTextUncheckedUpdateWithoutAuthorInput.schema"
import { PageTextUpdateWithoutAuthorInputObjectSchema } from "./PageTextUpdateWithoutAuthorInput.schema"
import { PageTextWhereUniqueInputObjectSchema } from "./PageTextWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageTextUpdateWithWhereUniqueWithoutAuthorInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PageTextUpdateWithoutAuthorInputObjectSchema),
      z.lazy(() => PageTextUncheckedUpdateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict()

export const PageTextUpdateWithWhereUniqueWithoutAuthorInputObjectSchema =
  Schema
