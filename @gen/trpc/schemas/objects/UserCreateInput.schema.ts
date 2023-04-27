import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionCreateNestedManyWithoutUserInputObjectSchema } from "./EditionCreateNestedManyWithoutUserInput.schema"

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
    Edition: z
      .lazy(() => EditionCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict()

export const UserCreateInputObjectSchema = Schema
