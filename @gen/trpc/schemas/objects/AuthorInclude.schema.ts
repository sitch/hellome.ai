import { z } from 'zod'
import { StoryFindManySchema } from '../findManyStory.schema'
import { PageTextFindManySchema } from '../findManyPageText.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.AuthorInclude> = z
  .object({
    stories: z
      .union([z.boolean(), z.lazy(() => StoryFindManySchema)])
      .optional(),
    pageTexts: z
      .union([z.boolean(), z.lazy(() => PageTextFindManySchema)])
      .optional(),
    _count: z.boolean().optional(),
  })
  .strict()

export const AuthorIncludeObjectSchema = Schema