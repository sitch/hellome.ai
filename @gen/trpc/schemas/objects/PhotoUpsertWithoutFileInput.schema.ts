import { z } from 'zod'
import { PhotoUpdateWithoutFileInputObjectSchema } from './PhotoUpdateWithoutFileInput.schema'
import { PhotoUncheckedUpdateWithoutFileInputObjectSchema } from './PhotoUncheckedUpdateWithoutFileInput.schema'
import { PhotoCreateWithoutFileInputObjectSchema } from './PhotoCreateWithoutFileInput.schema'
import { PhotoUncheckedCreateWithoutFileInputObjectSchema } from './PhotoUncheckedCreateWithoutFileInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.PhotoUpsertWithoutFileInput> = z
  .object({
    update: z.union([
      z.lazy(() => PhotoUpdateWithoutFileInputObjectSchema),
      z.lazy(() => PhotoUncheckedUpdateWithoutFileInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PhotoCreateWithoutFileInputObjectSchema),
      z.lazy(() => PhotoUncheckedCreateWithoutFileInputObjectSchema),
    ]),
  })
  .strict()

export const PhotoUpsertWithoutFileInputObjectSchema = Schema
