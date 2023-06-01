/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { UserCreateWithoutAuthorInputObjectSchema } from "./UserCreateWithoutAuthorInput.schema"
import { UserUncheckedCreateWithoutAuthorInputObjectSchema } from "./UserUncheckedCreateWithoutAuthorInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.UserCreateOrConnectWithoutAuthorInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutAuthorInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutAuthorInputObjectSchema = Schema
