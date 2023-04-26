import { FilePrivacySchema } from '../enums/FilePrivacy.schema'
import type { Prisma } from '@prisma/client'
import { z } from 'zod'

const Schema: z.ZodType<Prisma.EnumFilePrivacyFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => FilePrivacySchema).optional(),
  })
  .strict()

export const EnumFilePrivacyFieldUpdateOperationsInputObjectSchema = Schema
