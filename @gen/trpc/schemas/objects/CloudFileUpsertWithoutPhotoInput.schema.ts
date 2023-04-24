import { z } from 'zod'
import { CloudFileUpdateWithoutPhotoInputObjectSchema } from './CloudFileUpdateWithoutPhotoInput.schema'
import { CloudFileUncheckedUpdateWithoutPhotoInputObjectSchema } from './CloudFileUncheckedUpdateWithoutPhotoInput.schema'
import { CloudFileCreateWithoutPhotoInputObjectSchema } from './CloudFileCreateWithoutPhotoInput.schema'
import { CloudFileUncheckedCreateWithoutPhotoInputObjectSchema } from './CloudFileUncheckedCreateWithoutPhotoInput.schema'

import type { Prisma } from '@prisma/client'

const Schema: z.ZodType<Prisma.CloudFileUpsertWithoutPhotoInput> = z
  .object({
    update: z.union([
      z.lazy(() => CloudFileUpdateWithoutPhotoInputObjectSchema),
      z.lazy(() => CloudFileUncheckedUpdateWithoutPhotoInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CloudFileCreateWithoutPhotoInputObjectSchema),
      z.lazy(() => CloudFileUncheckedCreateWithoutPhotoInputObjectSchema),
    ]),
  })
  .strict()

export const CloudFileUpsertWithoutPhotoInputObjectSchema = Schema
