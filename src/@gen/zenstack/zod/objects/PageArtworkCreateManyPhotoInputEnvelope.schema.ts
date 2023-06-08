/* eslint-disable */
import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageArtworkCreateManyPhotoInputObjectSchema } from "./PageArtworkCreateManyPhotoInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkCreateManyPhotoInputEnvelope,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    data: z.union([
      z.lazy(() => PageArtworkCreateManyPhotoInputObjectSchema),
      z.lazy(() => PageArtworkCreateManyPhotoInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PageArtworkCreateManyPhotoInputEnvelopeObjectSchema = Schema
