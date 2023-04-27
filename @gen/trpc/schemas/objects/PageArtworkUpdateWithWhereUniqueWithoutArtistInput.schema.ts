import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkUncheckedUpdateWithoutArtistInputObjectSchema } from "./PageArtworkUncheckedUpdateWithoutArtistInput.schema"
import { PageArtworkUpdateWithoutArtistInputObjectSchema } from "./PageArtworkUpdateWithoutArtistInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./PageArtworkWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PageArtworkUpdateWithWhereUniqueWithoutArtistInput> =
  z
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
