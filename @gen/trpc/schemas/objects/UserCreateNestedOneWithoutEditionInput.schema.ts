import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { UserCreateOrConnectWithoutEditionInputObjectSchema } from "./UserCreateOrConnectWithoutEditionInput.schema"
import { UserCreateWithoutEditionInputObjectSchema } from "./UserCreateWithoutEditionInput.schema"
import { UserUncheckedCreateWithoutEditionInputObjectSchema } from "./UserUncheckedCreateWithoutEditionInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutEditionInput> = z
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
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateNestedOneWithoutEditionInputObjectSchema = Schema
