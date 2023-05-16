import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionFindManySchema } from "../findManyEdition.schema"
import { UserCountOutputTypeArgsObjectSchema } from "./UserCountOutputTypeArgs.schema"

const Schema: z.ZodType<Prisma.UserInclude> = z
  .object({
    Edition: z
      .union([z.boolean(), z.lazy(() => EditionFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const UserIncludeObjectSchema = Schema
