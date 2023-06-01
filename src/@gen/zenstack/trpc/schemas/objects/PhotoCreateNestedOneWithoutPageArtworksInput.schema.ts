/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoCreateOrConnectWithoutPageArtworksInputObjectSchema } from "./PhotoCreateOrConnectWithoutPageArtworksInput.schema"
import { PhotoCreateWithoutPageArtworksInputObjectSchema } from "./PhotoCreateWithoutPageArtworksInput.schema"
import { PhotoUncheckedCreateWithoutPageArtworksInputObjectSchema } from "./PhotoUncheckedCreateWithoutPageArtworksInput.schema"
import { PhotoWhereUniqueInputObjectSchema } from "./PhotoWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PhotoCreateNestedOneWithoutPageArtworksInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => PhotoCreateWithoutPageArtworksInputObjectSchema),
        z.lazy(() => PhotoUncheckedCreateWithoutPageArtworksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PhotoCreateOrConnectWithoutPageArtworksInputObjectSchema)
      .optional(),
    connect: z.lazy(() => PhotoWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const PhotoCreateNestedOneWithoutPageArtworksInputObjectSchema = Schema
