/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { UserCreateWithoutArtistInputObjectSchema } from "./UserCreateWithoutArtistInput.schema"
import { UserUncheckedCreateWithoutArtistInputObjectSchema } from "./UserUncheckedCreateWithoutArtistInput.schema"
import { UserUncheckedUpdateWithoutArtistInputObjectSchema } from "./UserUncheckedUpdateWithoutArtistInput.schema"
import { UserUpdateWithoutArtistInputObjectSchema } from "./UserUpdateWithoutArtistInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.UserUpsertWithoutArtistInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutArtistInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutArtistInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutArtistInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutArtistInputObjectSchema = Schema
