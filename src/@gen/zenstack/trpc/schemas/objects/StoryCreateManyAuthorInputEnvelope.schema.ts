/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { StoryCreateManyAuthorInputObjectSchema } from "./StoryCreateManyAuthorInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.StoryCreateManyAuthorInputEnvelope,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    data: z.union([
      z.lazy(() => StoryCreateManyAuthorInputObjectSchema),
      z.lazy(() => StoryCreateManyAuthorInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const StoryCreateManyAuthorInputEnvelopeObjectSchema = Schema
