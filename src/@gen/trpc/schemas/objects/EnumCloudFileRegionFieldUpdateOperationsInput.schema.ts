import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileRegionSchema } from "../enums/CloudFileRegion.schema"

const Schema: z.ZodType<Prisma.EnumCloudFileRegionFieldUpdateOperationsInput> =
  z
    .object({
      set: z.lazy(() => CloudFileRegionSchema).optional(),
    })
    .strict()

export const EnumCloudFileRegionFieldUpdateOperationsInputObjectSchema = Schema
