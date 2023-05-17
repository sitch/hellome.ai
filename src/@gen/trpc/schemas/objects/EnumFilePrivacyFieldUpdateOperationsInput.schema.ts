import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { FilePrivacySchema } from "../enums/FilePrivacy.schema"

const Schema: z.ZodType<Prisma.EnumFilePrivacyFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => FilePrivacySchema).optional(),
  })
  .strict()

export const EnumFilePrivacyFieldUpdateOperationsInputObjectSchema = Schema
