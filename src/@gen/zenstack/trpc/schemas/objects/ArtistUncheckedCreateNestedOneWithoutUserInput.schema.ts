/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistCreateOrConnectWithoutUserInputObjectSchema } from "./ArtistCreateOrConnectWithoutUserInput.schema"
import { ArtistCreateWithoutUserInputObjectSchema } from "./ArtistCreateWithoutUserInput.schema"
import { ArtistUncheckedCreateWithoutUserInputObjectSchema } from "./ArtistUncheckedCreateWithoutUserInput.schema"
import { ArtistWhereUniqueInputObjectSchema } from "./ArtistWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ArtistUncheckedCreateNestedOneWithoutUserInput,
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
    connect: z.lazy(() => ArtistWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const ArtistUncheckedCreateNestedOneWithoutUserInputObjectSchema = Schema
