import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { UserCreateNestedOneWithoutEditionInputObjectSchema } from "./UserCreateNestedOneWithoutEditionInput.schema"

const Schema: z.ZodType<Prisma.EditionCreateWithoutPdfInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutEditionInputObjectSchema),
  })
  .strict()

export const EditionCreateWithoutPdfInputObjectSchema = Schema
