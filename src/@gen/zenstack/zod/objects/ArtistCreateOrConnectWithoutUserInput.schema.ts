/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { ArtistCreateWithoutUserInputObjectSchema } from "./ArtistCreateWithoutUserInput.schema"
import { ArtistUncheckedCreateWithoutUserInputObjectSchema } from "./ArtistUncheckedCreateWithoutUserInput.schema"
import { ArtistWhereUniqueInputObjectSchema } from "./ArtistWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.ArtistCreateOrConnectWithoutUserInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => ArtistWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ArtistCreateWithoutUserInputObjectSchema),
      z.lazy(() => ArtistUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const ArtistCreateOrConnectWithoutUserInputObjectSchema = Schema
