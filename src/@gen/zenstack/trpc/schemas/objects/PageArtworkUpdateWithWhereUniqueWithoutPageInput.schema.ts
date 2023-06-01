/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkUncheckedUpdateWithoutPageInputObjectSchema } from "./PageArtworkUncheckedUpdateWithoutPageInput.schema"
import { PageArtworkUpdateWithoutPageInputObjectSchema } from "./PageArtworkUpdateWithoutPageInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./PageArtworkWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkUpdateWithWhereUniqueWithoutPageInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PageArtworkUpdateWithoutPageInputObjectSchema),
      z.lazy(() => PageArtworkUncheckedUpdateWithoutPageInputObjectSchema),
    ]),
  })
  .strict()

export const PageArtworkUpdateWithWhereUniqueWithoutPageInputObjectSchema =
  Schema
