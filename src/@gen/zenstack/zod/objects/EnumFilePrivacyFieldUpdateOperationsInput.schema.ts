/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { FilePrivacySchema } from "../enums/FilePrivacy.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EnumFilePrivacyFieldUpdateOperationsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    set: z.lazy(() => FilePrivacySchema).optional(),
  })
  .strict()

export const EnumFilePrivacyFieldUpdateOperationsInputObjectSchema = Schema
