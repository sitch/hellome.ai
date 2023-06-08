/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileCreateWithoutPhotoInputObjectSchema } from "./CloudFileCreateWithoutPhotoInput.schema"
import { CloudFileUncheckedCreateWithoutPhotoInputObjectSchema } from "./CloudFileUncheckedCreateWithoutPhotoInput.schema"
import { CloudFileWhereUniqueInputObjectSchema } from "./CloudFileWhereUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.CloudFileCreateOrConnectWithoutPhotoInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    where: z.lazy(() => CloudFileWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CloudFileCreateWithoutPhotoInputObjectSchema),
      z.lazy(() => CloudFileUncheckedCreateWithoutPhotoInputObjectSchema),
    ]),
  })
  .strict()

export const CloudFileCreateOrConnectWithoutPhotoInputObjectSchema = Schema
