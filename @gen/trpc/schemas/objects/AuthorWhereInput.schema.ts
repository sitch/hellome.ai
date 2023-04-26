import { PageTextListRelationFilterObjectSchema } from './PageTextListRelationFilter.schema'
import { StoryListRelationFilterObjectSchema } from './StoryListRelationFilter.schema'
import { StringFilterObjectSchema } from './StringFilter.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.AuthorWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AuthorWhereInputObjectSchema),
        z.lazy(() => AuthorWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AuthorWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AuthorWhereInputObjectSchema),
        z.lazy(() => AuthorWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    stories: z.lazy(() => StoryListRelationFilterObjectSchema).optional(),
    pageTexts: z.lazy(() => PageTextListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const AuthorWhereInputObjectSchema = Schema
