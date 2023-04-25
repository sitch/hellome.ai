import { z } from 'zod'
import { StoryFindManySchema } from '../findManyStory.schema'
import { PageTextFindManySchema } from '../findManyPageText.schema'
import { AuthorCountOutputTypeArgsObjectSchema } from './AuthorCountOutputTypeArgs.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorSelect> = z
  .object({
    id: z.boolean().optional(),
    stories: z
      .union([z.boolean(), z.lazy(() => StoryFindManySchema)])
      .optional(),
    pageTexts: z
      .union([z.boolean(), z.lazy(() => PageTextFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => AuthorCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict()

export const AuthorSelectObjectSchema = Schema
