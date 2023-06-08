/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileIncludeObjectSchema } from "./CloudFileInclude.schema"
import { CloudFileSelectObjectSchema } from "./CloudFileSelect.schema"

const Schema: z.ZodType<
  Omit<Prisma.CloudFileArgs, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    select: z.lazy(() => CloudFileSelectObjectSchema).optional(),
    include: z.lazy(() => CloudFileIncludeObjectSchema).optional(),
  })
  .strict()

export const CloudFileArgsObjectSchema = Schema
