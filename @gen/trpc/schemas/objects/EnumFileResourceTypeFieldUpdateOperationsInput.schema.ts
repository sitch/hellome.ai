import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { FileResourceTypeSchema } from "../enums/FileResourceType.schema"

const Schema: z.ZodType<Prisma.EnumFileResourceTypeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => FileResourceTypeSchema).optional(),
    })
    .strict()

export const EnumFileResourceTypeFieldUpdateOperationsInputObjectSchema = Schema
