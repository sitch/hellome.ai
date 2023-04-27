import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionFindManySchema } from "../findManyEdition.schema"
import { UserCountOutputTypeArgsObjectSchema } from "./UserCountOutputTypeArgs.schema"

const Schema: z.ZodType<Prisma.UserSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    email: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    Edition: z
      .union([z.boolean(), z.lazy(() => EditionFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const UserSelectObjectSchema = Schema
