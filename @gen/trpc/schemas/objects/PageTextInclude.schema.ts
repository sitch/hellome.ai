import { z } from 'zod'
import { PageArgsObjectSchema } from './PageArgs.schema'
import { StoryArgsObjectSchema } from './StoryArgs.schema'
import { AuthorArgsObjectSchema } from './AuthorArgs.schema'
import { TranslatorArgsObjectSchema } from './TranslatorArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageTextInclude> = z
  .object({
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

export const PageTextIncludeObjectSchema = Schema
