import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PageStatusSchema } from "../enums/PageStatus.schema"
import { PageTypeSchema } from "../enums/PageType.schema"
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"
import { EnumPageStatusWithAggregatesFilterObjectSchema } from "./EnumPageStatusWithAggregatesFilter.schema"
import { EnumPageTypeWithAggregatesFilterObjectSchema } from "./EnumPageTypeWithAggregatesFilter.schema"
import { IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"

const Schema: z.ZodType<Prisma.PageScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PageScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => PageScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PageScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PageScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => PageScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumPageStatusWithAggregatesFilterObjectSchema),
        z.lazy(() => PageStatusSchema),
      ])
      .optional(),
    type: z
      .union([
        z.lazy(() => EnumPageTypeWithAggregatesFilterObjectSchema),
        z.lazy(() => PageTypeSchema),
      ])
      .optional(),
    pageNumber: z
      .union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
      .optional(),
    storyId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict()

export const PageScalarWhereWithAggregatesInputObjectSchema = Schema
