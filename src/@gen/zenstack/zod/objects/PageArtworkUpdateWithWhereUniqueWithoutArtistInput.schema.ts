/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkUncheckedUpdateWithoutArtistInputObjectSchema } from "./PageArtworkUncheckedUpdateWithoutArtistInput.schema"
import { PageArtworkUpdateWithoutArtistInputObjectSchema } from "./PageArtworkUpdateWithoutArtistInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./PageArtworkWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkUpdateWithWhereUniqueWithoutArtistInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PageArtworkUpdateWithoutArtistInputObjectSchema),
      z.lazy(() => PageArtworkUncheckedUpdateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict()

export const PageArtworkUpdateWithWhereUniqueWithoutArtistInputObjectSchema =
  Schema
