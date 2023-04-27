import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkCreateWithoutArtistInputObjectSchema } from "./PageArtworkCreateWithoutArtistInput.schema"
import { PageArtworkUncheckedCreateWithoutArtistInputObjectSchema } from "./PageArtworkUncheckedCreateWithoutArtistInput.schema"
import { PageArtworkUncheckedUpdateWithoutArtistInputObjectSchema } from "./PageArtworkUncheckedUpdateWithoutArtistInput.schema"
import { PageArtworkUpdateWithoutArtistInputObjectSchema } from "./PageArtworkUpdateWithoutArtistInput.schema"
import { PageArtworkWhereUniqueInputObjectSchema } from "./PageArtworkWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PageArtworkUpsertWithWhereUniqueWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => PageArtworkWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => PageArtworkUpdateWithoutArtistInputObjectSchema),
        z.lazy(() => PageArtworkUncheckedUpdateWithoutArtistInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => PageArtworkCreateWithoutArtistInputObjectSchema),
        z.lazy(() => PageArtworkUncheckedCreateWithoutArtistInputObjectSchema),
      ]),
    })
    .strict()

export const PageArtworkUpsertWithWhereUniqueWithoutArtistInputObjectSchema =
  Schema
