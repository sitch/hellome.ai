/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { UserCreateOrConnectWithoutArtistInputObjectSchema } from "./UserCreateOrConnectWithoutArtistInput.schema"
import { UserCreateWithoutArtistInputObjectSchema } from "./UserCreateWithoutArtistInput.schema"
import { UserUncheckedCreateWithoutArtistInputObjectSchema } from "./UserUncheckedCreateWithoutArtistInput.schema"
import { UserUncheckedUpdateWithoutArtistInputObjectSchema } from "./UserUncheckedUpdateWithoutArtistInput.schema"
import { UserUpdateWithoutArtistInputObjectSchema } from "./UserUpdateWithoutArtistInput.schema"
import { UserUpsertWithoutArtistInputObjectSchema } from "./UserUpsertWithoutArtistInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.UserUpdateOneRequiredWithoutArtistNestedInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutArtistInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutArtistInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutArtistInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutArtistInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutArtistInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutArtistInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserUpdateOneRequiredWithoutArtistNestedInputObjectSchema = Schema
