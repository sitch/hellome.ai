/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageCreateWithoutArtworksInputObjectSchema } from "./PageCreateWithoutArtworksInput.schema"
import { PageUncheckedCreateWithoutArtworksInputObjectSchema } from "./PageUncheckedCreateWithoutArtworksInput.schema"
import { PageUncheckedUpdateWithoutArtworksInputObjectSchema } from "./PageUncheckedUpdateWithoutArtworksInput.schema"
import { PageUpdateWithoutArtworksInputObjectSchema } from "./PageUpdateWithoutArtworksInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageUpsertWithoutArtworksInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => PageUpdateWithoutArtworksInputObjectSchema),
      z.lazy(() => PageUncheckedUpdateWithoutArtworksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PageCreateWithoutArtworksInputObjectSchema),
      z.lazy(() => PageUncheckedCreateWithoutArtworksInputObjectSchema),
    ]),
  })
  .strict()

export const PageUpsertWithoutArtworksInputObjectSchema = Schema
