import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileRegionBucketKeyCompoundUniqueInputObjectSchema } from "./CloudFileRegionBucketKeyCompoundUniqueInput.schema"

const Schema: z.ZodType<Prisma.CloudFileWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    publicUrl: z.string().optional(),
    region_bucket_key: z
      .lazy(() => CloudFileRegionBucketKeyCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict()

export const CloudFileWhereUniqueInputObjectSchema = Schema
