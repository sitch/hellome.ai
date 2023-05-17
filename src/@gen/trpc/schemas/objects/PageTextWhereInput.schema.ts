import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { LocaleSchema } from "../enums/Locale.schema"
import { PageStatusSchema } from "../enums/PageStatus.schema"
import { PageTextTypeSchema } from "../enums/PageTextType.schema"
import { AuthorRelationFilterObjectSchema } from "./AuthorRelationFilter.schema"
import { AuthorWhereInputObjectSchema } from "./AuthorWhereInput.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { EnumLocaleFilterObjectSchema } from "./EnumLocaleFilter.schema"
import { EnumPageStatusFilterObjectSchema } from "./EnumPageStatusFilter.schema"
import { EnumPageTextTypeFilterObjectSchema } from "./EnumPageTextTypeFilter.schema"
import { PageRelationFilterObjectSchema } from "./PageRelationFilter.schema"
import { PageWhereInputObjectSchema } from "./PageWhereInput.schema"
import { StoryRelationFilterObjectSchema } from "./StoryRelationFilter.schema"
import { StoryWhereInputObjectSchema } from "./StoryWhereInput.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { TranslatorRelationFilterObjectSchema } from "./TranslatorRelationFilter.schema"
import { TranslatorWhereInputObjectSchema } from "./TranslatorWhereInput.schema"

const Schema: z.ZodType<Prisma.PageTextWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PageTextWhereInputObjectSchema),
        z.lazy(() => PageTextWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PageTextWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PageTextWhereInputObjectSchema),
        z.lazy(() => PageTextWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumPageStatusFilterObjectSchema),
        z.lazy(() => PageStatusSchema),
      ])
      .optional(),
    locale: z
      .union([
        z.lazy(() => EnumLocaleFilterObjectSchema),
        z.lazy(() => LocaleSchema),
      ])
      .optional(),
    text: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumPageTextTypeFilterObjectSchema),
        z.lazy(() => PageTextTypeSchema),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    pageId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    storyId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    authorId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    translatorId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    page: z
      .union([
        z.lazy(() => PageRelationFilterObjectSchema),
        z.lazy(() => PageWhereInputObjectSchema),
      ])
      .optional(),
    story: z
      .union([
        z.lazy(() => StoryRelationFilterObjectSchema),
        z.lazy(() => StoryWhereInputObjectSchema),
      ])
      .optional(),
    author: z
      .union([
        z.lazy(() => AuthorRelationFilterObjectSchema),
        z.lazy(() => AuthorWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    translator: z
      .union([
        z.lazy(() => TranslatorRelationFilterObjectSchema),
        z.lazy(() => TranslatorWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict()

export const PageTextWhereInputObjectSchema = Schema
