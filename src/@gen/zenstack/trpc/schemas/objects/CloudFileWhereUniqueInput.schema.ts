/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileRegionBucketKeyCompoundUniqueInputObjectSchema } from "./CloudFileRegionBucketKeyCompoundUniqueInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.CloudFileWhereUniqueInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    publicUrl: z.string().optional(),
    id: z.string().optional(),
    region_bucket_key: z
      .lazy(() => CloudFileRegionBucketKeyCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict()

export const CloudFileWhereUniqueInputObjectSchema = Schema
