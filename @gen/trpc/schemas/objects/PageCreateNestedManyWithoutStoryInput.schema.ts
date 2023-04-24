import { z } from 'zod'
import { PageCreateWithoutStoryInputObjectSchema } from './PageCreateWithoutStoryInput.schema'
import { PageUncheckedCreateWithoutStoryInputObjectSchema } from './PageUncheckedCreateWithoutStoryInput.schema'
import { PageCreateOrConnectWithoutStoryInputObjectSchema } from './PageCreateOrConnectWithoutStoryInput.schema'
import { PageCreateManyStoryInputEnvelopeObjectSchema } from './PageCreateManyStoryInputEnvelope.schema'
import { PageWhereUniqueInputObjectSchema } from './PageWhereUniqueInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PageCreateNestedManyWithoutStoryInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PageCreateWithoutStoryInputObjectSchema),
        z.lazy(() => PageCreateWithoutStoryInputObjectSchema).array(),
        z.lazy(() => PageUncheckedCreateWithoutStoryInputObjectSchema),
        z.lazy(() => PageUncheckedCreateWithoutStoryInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PageCreateOrConnectWithoutStoryInputObjectSchema),
        z.lazy(() => PageCreateOrConnectWithoutStoryInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PageCreateManyStoryInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => PageWhereUniqueInputObjectSchema),
        z.lazy(() => PageWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const PageCreateNestedManyWithoutStoryInputObjectSchema = Schema
