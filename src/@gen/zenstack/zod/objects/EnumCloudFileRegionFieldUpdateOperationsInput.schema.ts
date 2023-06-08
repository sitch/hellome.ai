/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileRegionSchema } from "../enums/CloudFileRegion.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EnumCloudFileRegionFieldUpdateOperationsInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    set: z.lazy(() => CloudFileRegionSchema).optional(),
  })
  .strict()

export const EnumCloudFileRegionFieldUpdateOperationsInputObjectSchema = Schema
