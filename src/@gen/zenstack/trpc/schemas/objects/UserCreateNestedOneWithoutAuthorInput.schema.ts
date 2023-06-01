/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { UserCreateOrConnectWithoutAuthorInputObjectSchema } from "./UserCreateOrConnectWithoutAuthorInput.schema"
import { UserCreateWithoutAuthorInputObjectSchema } from "./UserCreateWithoutAuthorInput.schema"
import { UserUncheckedCreateWithoutAuthorInputObjectSchema } from "./UserUncheckedCreateWithoutAuthorInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.UserCreateNestedOneWithoutAuthorInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutAuthorInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutAuthorInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutAuthorInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateNestedOneWithoutAuthorInputObjectSchema = Schema
