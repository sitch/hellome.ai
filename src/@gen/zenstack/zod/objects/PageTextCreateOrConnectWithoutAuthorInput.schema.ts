/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageTextCreateWithoutAuthorInputObjectSchema } from "./PageTextCreateWithoutAuthorInput.schema"
import { PageTextUncheckedCreateWithoutAuthorInputObjectSchema } from "./PageTextUncheckedCreateWithoutAuthorInput.schema"
import { PageTextWhereUniqueInputObjectSchema } from "./PageTextWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageTextCreateOrConnectWithoutAuthorInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PageTextWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PageTextCreateWithoutAuthorInputObjectSchema),
      z.lazy(() => PageTextUncheckedCreateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict()

export const PageTextCreateOrConnectWithoutAuthorInputObjectSchema = Schema
