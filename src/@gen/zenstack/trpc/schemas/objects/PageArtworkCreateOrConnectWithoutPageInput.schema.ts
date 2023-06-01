/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkCreateWithoutPageInputObjectSchema } from "./PageArtworkCreateWithoutPageInput.schema"
import { PageArtworkUncheckedCreateWithoutPageInputObjectSchema } from "./PageArtworkUncheckedCreateWithoutPageInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./PageArtworkWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkCreateOrConnectWithoutPageInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PageArtworkCreateWithoutPageInputObjectSchema),
      z.lazy(() => PageArtworkUncheckedCreateWithoutPageInputObjectSchema),
    ]),
  })
  .strict()

export const PageArtworkCreateOrConnectWithoutPageInputObjectSchema = Schema
