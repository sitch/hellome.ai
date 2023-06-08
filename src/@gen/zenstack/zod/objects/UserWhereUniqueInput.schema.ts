/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<Prisma.UserWhereUniqueInput, "zenstack_transaction" | "zenstack_guard">
> = z
  .object({
    email: z.string().optional(),
    id: z.string().optional(),
  })
  .strict()

export const UserWhereUniqueInputObjectSchema = Schema
