/* eslint-disable */

import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { PageCreateNestedOneWithoutArtworksInputObjectSchema } from "./PageCreateNestedOneWithoutArtworksInput.schema"
import { PhotoCreateNestedOneWithoutPageArtworksInputObjectSchema } from "./PhotoCreateNestedOneWithoutPageArtworksInput.schema"
import { StoryCreateNestedOneWithoutPageArtworksInputObjectSchema } from "./StoryCreateNestedOneWithoutPageArtworksInput.schema"

const Schema: z.ZodType<
  Omit<
    Prisma.PageArtworkCreateWithoutArtistInput,
    "zenstack_transaction" | "zenstack_guard"
  >
> = z
  .object({
    status: z.lazy(() => PageStatusSchema).optional(),
    id: z.string().optional(),
    createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
    deletedAt: z
      .union([z.date().optional(), z.string().datetime().optional()])
      .nullable(),
    page: z.lazy(() => PageCreateNestedOneWithoutArtworksInputObjectSchema),
    story: z.lazy(
      () => StoryCreateNestedOneWithoutPageArtworksInputObjectSchema,
    ),
    photo: z.lazy(
      () => PhotoCreateNestedOneWithoutPageArtworksInputObjectSchema,
    ),
  })
  .strict()

export const PageArtworkCreateWithoutArtistInputObjectSchema = Schema
