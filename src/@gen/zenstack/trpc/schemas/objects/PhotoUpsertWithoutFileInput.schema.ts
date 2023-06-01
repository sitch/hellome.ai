/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoCreateWithoutFileInputObjectSchema } from "./PhotoCreateWithoutFileInput.schema"
import { PhotoUncheckedCreateWithoutFileInputObjectSchema } from "./PhotoUncheckedCreateWithoutFileInput.schema"
import { PhotoUncheckedUpdateWithoutFileInputObjectSchema } from "./PhotoUncheckedUpdateWithoutFileInput.schema"
import { PhotoUpdateWithoutFileInputObjectSchema } from "./PhotoUpdateWithoutFileInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PhotoUpsertWithoutFileInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    update: z.union([
      z.lazy(() => PhotoUpdateWithoutFileInputObjectSchema),
      z.lazy(() => PhotoUncheckedUpdateWithoutFileInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PhotoCreateWithoutFileInputObjectSchema),
      z.lazy(() => PhotoUncheckedCreateWithoutFileInputObjectSchema),
    ]),
  })
  .strict()

export const PhotoUpsertWithoutFileInputObjectSchema = Schema
