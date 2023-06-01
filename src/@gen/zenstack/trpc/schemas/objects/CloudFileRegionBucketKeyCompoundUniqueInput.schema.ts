/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileRegionSchema } from "../enums/CloudFileRegion.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.CloudFileRegionBucketKeyCompoundUniqueInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    region: z.lazy(() => CloudFileRegionSchema),
    bucket: z.string(),
    key: z.string(),
  })
  .strict()

export const CloudFileRegionBucketKeyCompoundUniqueInputObjectSchema = Schema
