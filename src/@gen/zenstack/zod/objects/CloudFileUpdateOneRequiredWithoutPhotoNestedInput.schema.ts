/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileCreateOrConnectWithoutPhotoInputObjectSchema } from "./CloudFileCreateOrConnectWithoutPhotoInput.schema"
import { CloudFileCreateWithoutPhotoInputObjectSchema } from "./CloudFileCreateWithoutPhotoInput.schema"
import { CloudFileUncheckedCreateWithoutPhotoInputObjectSchema } from "./CloudFileUncheckedCreateWithoutPhotoInput.schema"
import { CloudFileUncheckedUpdateWithoutPhotoInputObjectSchema } from "./CloudFileUncheckedUpdateWithoutPhotoInput.schema"
import { CloudFileUpdateWithoutPhotoInputObjectSchema } from "./CloudFileUpdateWithoutPhotoInput.schema"
import { CloudFileUpsertWithoutPhotoInputObjectSchema } from "./CloudFileUpsertWithoutPhotoInput.schema"
import { CloudFileWhereUniqueInputObjectSchema } from "./CloudFileWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.CloudFileUpdateOneRequiredWithoutPhotoNestedInput,
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
    upsert: z
      .lazy(() => CloudFileUpsertWithoutPhotoInputObjectSchema)
      .optional(),
    connect: z.lazy(() => CloudFileWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => CloudFileUpdateWithoutPhotoInputObjectSchema),
        z.lazy(() => CloudFileUncheckedUpdateWithoutPhotoInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const CloudFileUpdateOneRequiredWithoutPhotoNestedInputObjectSchema =
  Schema
