import { PhotoCreateWithoutFileInputObjectSchema } from './PhotoCreateWithoutFileInput.schema'
import { PhotoUncheckedCreateWithoutFileInputObjectSchema } from './PhotoUncheckedCreateWithoutFileInput.schema'
import { PhotoUncheckedUpdateWithoutFileInputObjectSchema } from './PhotoUncheckedUpdateWithoutFileInput.schema'
import { PhotoUpdateWithoutFileInputObjectSchema } from './PhotoUpdateWithoutFileInput.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

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
