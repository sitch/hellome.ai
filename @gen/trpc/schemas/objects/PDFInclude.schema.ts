import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { CloudFileArgsObjectSchema } from "./CloudFileArgs.schema"
import { EditionArgsObjectSchema } from "./EditionArgs.schema"

const Schema: z.ZodType<Prisma.PDFInclude> = z
  .object({
    file: z
      .union([z.boolean(), z.lazy(() => CloudFileArgsObjectSchema)])
      .optional(),
    edition: z
      .union([z.boolean(), z.lazy(() => EditionArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const PDFIncludeObjectSchema = Schema
