/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { UserCreateOrConnectWithoutArtistInputObjectSchema } from "./UserCreateOrConnectWithoutArtistInput.schema"
import { UserCreateWithoutArtistInputObjectSchema } from "./UserCreateWithoutArtistInput.schema"
import { UserUncheckedCreateWithoutArtistInputObjectSchema } from "./UserUncheckedCreateWithoutArtistInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.UserCreateNestedOneWithoutArtistInput,
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateNestedOneWithoutArtistInputObjectSchema = Schema
