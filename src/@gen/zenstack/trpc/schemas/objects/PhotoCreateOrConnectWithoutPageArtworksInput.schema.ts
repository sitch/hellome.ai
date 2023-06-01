/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoCreateWithoutPageArtworksInputObjectSchema } from "./PhotoCreateWithoutPageArtworksInput.schema"
import { PhotoUncheckedCreateWithoutPageArtworksInputObjectSchema } from "./PhotoUncheckedCreateWithoutPageArtworksInput.schema"
import { PhotoWhereUniqueInputObjectSchema } from "./PhotoWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PhotoCreateOrConnectWithoutPageArtworksInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => PhotoWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PhotoCreateWithoutPageArtworksInputObjectSchema),
      z.lazy(() => PhotoUncheckedCreateWithoutPageArtworksInputObjectSchema),
    ]),
  })
  .strict()

export const PhotoCreateOrConnectWithoutPageArtworksInputObjectSchema = Schema
