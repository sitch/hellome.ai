/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkCreateWithoutArtistInputObjectSchema } from "./PageArtworkCreateWithoutArtistInput.schema"
import { PageArtworkUncheckedCreateWithoutArtistInputObjectSchema } from "./PageArtworkUncheckedCreateWithoutArtistInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./PageArtworkWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkCreateOrConnectWithoutArtistInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PageArtworkCreateWithoutArtistInputObjectSchema),
      z.lazy(() => PageArtworkUncheckedCreateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict()

export const PageArtworkCreateOrConnectWithoutArtistInputObjectSchema = Schema
