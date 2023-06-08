/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistCreateWithoutUserInputObjectSchema } from "./ArtistCreateWithoutUserInput.schema"
import { ArtistUncheckedCreateWithoutUserInputObjectSchema } from "./ArtistUncheckedCreateWithoutUserInput.schema"
import { ArtistUncheckedUpdateWithoutUserInputObjectSchema } from "./ArtistUncheckedUpdateWithoutUserInput.schema"
import { ArtistUpdateWithoutUserInputObjectSchema } from "./ArtistUpdateWithoutUserInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ArtistUpsertWithoutUserInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => ArtistUpdateWithoutUserInputObjectSchema),
      z.lazy(() => ArtistUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutUserInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const ArtistUpsertWithoutUserInputObjectSchema = Schema
