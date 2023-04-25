import { z } from 'zod'
import { PageArgsObjectSchema } from './PageArgs.schema'
import { StoryArgsObjectSchema } from './StoryArgs.schema'
import { AuthorArgsObjectSchema } from './AuthorArgs.schema'
import { TranslatorArgsObjectSchema } from './TranslatorArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextSelect> = z
  .object({
    id: z.boolean().optional(),
    status: z.boolean().optional(),
    locale: z.boolean().optional(),
    text: z.boolean().optional(),
    type: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    pageId: z.boolean().optional(),
    storyId: z.boolean().optional(),
    authorId: z.boolean().optional(),
    translatorId: z.boolean().optional(),
    page: z.union([z.boolean(), z.lazy(() => PageArgsObjectSchema)]).optional(),
    story: z
      .union([z.boolean(), z.lazy(() => StoryArgsObjectSchema)])
      .optional(),
    author: z
      .union([z.boolean(), z.lazy(() => AuthorArgsObjectSchema)])
      .optional(),
    translator: z
      .union([z.boolean(), z.lazy(() => TranslatorArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const PageTextSelectObjectSchema = Schema
