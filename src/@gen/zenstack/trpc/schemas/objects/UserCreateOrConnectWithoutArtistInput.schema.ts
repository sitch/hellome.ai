/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { UserCreateWithoutArtistInputObjectSchema } from "./UserCreateWithoutArtistInput.schema"
import { UserUncheckedCreateWithoutArtistInputObjectSchema } from "./UserUncheckedCreateWithoutArtistInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.UserCreateOrConnectWithoutArtistInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutArtistInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutArtistInputObjectSchema = Schema
