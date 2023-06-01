/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistCreateOrConnectWithoutUserInputObjectSchema } from "./ArtistCreateOrConnectWithoutUserInput.schema"
import { ArtistCreateWithoutUserInputObjectSchema } from "./ArtistCreateWithoutUserInput.schema"
import { ArtistUncheckedCreateWithoutUserInputObjectSchema } from "./ArtistUncheckedCreateWithoutUserInput.schema"
import { ArtistUncheckedUpdateWithoutUserInputObjectSchema } from "./ArtistUncheckedUpdateWithoutUserInput.schema"
import { ArtistUpdateWithoutUserInputObjectSchema } from "./ArtistUpdateWithoutUserInput.schema"
import { ArtistUpsertWithoutUserInputObjectSchema } from "./ArtistUpsertWithoutUserInput.schema"
import { ArtistWhereUniqueInputObjectSchema } from "./ArtistWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ArtistUpdateOneWithoutUserNestedInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => ArtistCreateWithoutUserInputObjectSchema),
        z.lazy(() => ArtistUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => ArtistCreateOrConnectWithoutUserInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => ArtistUpsertWithoutUserInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => ArtistUpdateWithoutUserInputObjectSchema),
        z.lazy(() => ArtistUncheckedUpdateWithoutUserInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const ArtistUpdateOneWithoutUserNestedInputObjectSchema = Schema
