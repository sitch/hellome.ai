/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

const Schema: z.ZodType<
  Omit<
    Prisma.PageCountOutputTypeSelect,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    artworks: z.boolean().optional(),
    texts: z.boolean().optional(),
  })
  .strict()

export const PageCountOutputTypeSelectObjectSchema = Schema
