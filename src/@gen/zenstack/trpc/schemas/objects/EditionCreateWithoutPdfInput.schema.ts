/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { UserCreateNestedOneWithoutEditionsInputObjectSchema } from "./UserCreateNestedOneWithoutEditionsInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.EditionCreateWithoutPdfInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    user: z.lazy(() => UserCreateNestedOneWithoutEditionsInputObjectSchema),
  })
  .strict()

export const EditionCreateWithoutPdfInputObjectSchema = Schema
