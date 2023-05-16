import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { UserCreateOrConnectWithoutEditionInputObjectSchema } from "./UserCreateOrConnectWithoutEditionInput.schema"
import { UserCreateWithoutEditionInputObjectSchema } from "./UserCreateWithoutEditionInput.schema"
import { UserUncheckedCreateWithoutEditionInputObjectSchema } from "./UserUncheckedCreateWithoutEditionInput.schema"
import { UserUncheckedUpdateWithoutEditionInputObjectSchema } from "./UserUncheckedUpdateWithoutEditionInput.schema"
import { UserUpdateWithoutEditionInputObjectSchema } from "./UserUpdateWithoutEditionInput.schema"
import { UserUpsertWithoutEditionInputObjectSchema } from "./UserUpsertWithoutEditionInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutEditionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutEditionInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutEditionInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutEditionInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutEditionInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutEditionInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutEditionInputObjectSchema),
        ])
        .optional(),
    })
    .strict()

export const UserUpdateOneRequiredWithoutEditionNestedInputObjectSchema = Schema
