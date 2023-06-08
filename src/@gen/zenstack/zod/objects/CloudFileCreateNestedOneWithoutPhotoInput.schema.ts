/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileCreateOrConnectWithoutPhotoInputObjectSchema } from "./CloudFileCreateOrConnectWithoutPhotoInput.schema"
import { CloudFileCreateWithoutPhotoInputObjectSchema } from "./CloudFileCreateWithoutPhotoInput.schema"
import { CloudFileUncheckedCreateWithoutPhotoInputObjectSchema } from "./CloudFileUncheckedCreateWithoutPhotoInput.schema"
import { CloudFileWhereUniqueInputObjectSchema } from "./CloudFileWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.CloudFileCreateNestedOneWithoutPhotoInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    create: z
      .union([
        z.lazy(() => CloudFileCreateWithoutPhotoInputObjectSchema),
        z.lazy(() => CloudFileUncheckedCreateWithoutPhotoInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CloudFileCreateOrConnectWithoutPhotoInputObjectSchema)
      .optional(),
    connect: z.lazy(() => CloudFileWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const CloudFileCreateNestedOneWithoutPhotoInputObjectSchema = Schema
