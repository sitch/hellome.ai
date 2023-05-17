import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"

const Schema: z.ZodType<Prisma.EnumPageStatusFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => PageStatusSchema).optional(),
  })
  .strict()

export const EnumPageStatusFieldUpdateOperationsInputObjectSchema = Schema
