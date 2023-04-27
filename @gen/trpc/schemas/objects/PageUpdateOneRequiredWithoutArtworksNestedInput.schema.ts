import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageCreateOrConnectWithoutArtworksInputObjectSchema } from "./PageCreateOrConnectWithoutArtworksInput.schema"
import { PageCreateWithoutArtworksInputObjectSchema } from "./PageCreateWithoutArtworksInput.schema"
import { PageUncheckedCreateWithoutArtworksInputObjectSchema } from "./PageUncheckedCreateWithoutArtworksInput.schema"
import { PageUncheckedUpdateWithoutArtworksInputObjectSchema } from "./PageUncheckedUpdateWithoutArtworksInput.schema"
import { PageUpdateWithoutArtworksInputObjectSchema } from "./PageUpdateWithoutArtworksInput.schema"
import { PageUpsertWithoutArtworksInputObjectSchema } from "./PageUpsertWithoutArtworksInput.schema"
import { PageWhereUniqueInputObjectSchema } from "./PageWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.PageUpdateOneRequiredWithoutArtworksNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PageCreateWithoutArtworksInputObjectSchema),
          z.lazy(() => PageUncheckedCreateWithoutArtworksInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PageCreateOrConnectWithoutArtworksInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => PageUpsertWithoutArtworksInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PageWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PageUpdateWithoutArtworksInputObjectSchema),
          z.lazy(() => PageUncheckedUpdateWithoutArtworksInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const PageUpdateOneRequiredWithoutArtworksNestedInputObjectSchema =
  Schema
