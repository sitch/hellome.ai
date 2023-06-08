/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { UserCreateOrConnectWithoutAuthorInputObjectSchema } from "./UserCreateOrConnectWithoutAuthorInput.schema"
import { UserCreateWithoutAuthorInputObjectSchema } from "./UserCreateWithoutAuthorInput.schema"
import { UserUncheckedCreateWithoutAuthorInputObjectSchema } from "./UserUncheckedCreateWithoutAuthorInput.schema"
import { UserUncheckedUpdateWithoutAuthorInputObjectSchema } from "./UserUncheckedUpdateWithoutAuthorInput.schema"
import { UserUpdateWithoutAuthorInputObjectSchema } from "./UserUpdateWithoutAuthorInput.schema"
import { UserUpsertWithoutAuthorInputObjectSchema } from "./UserUpsertWithoutAuthorInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.UserUpdateOneRequiredWithoutAuthorNestedInput,
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
    upsert: z.lazy(() => UserUpsertWithoutAuthorInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutAuthorInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutAuthorInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserUpdateOneRequiredWithoutAuthorNestedInputObjectSchema = Schema
