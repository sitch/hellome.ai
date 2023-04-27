import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { EditionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./EditionUncheckedCreateNestedManyWithoutUserInput.schema"

const Schema: z.ZodType<Prisma.UserUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    email: z.string(),
    updatedAt: z.date().optional(),
    createdAt: z.date().optional(),
    Edition: z
      .lazy(() => EditionUncheckedCreateNestedManyWithoutUserInputObjectSchema)
      .optional(),
  })
  .strict()

export const UserUncheckedCreateInputObjectSchema = Schema
