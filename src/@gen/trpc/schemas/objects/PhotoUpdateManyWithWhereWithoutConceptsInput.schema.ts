import type { Prisma } from "@prisma/client"
import { z } from "zod"

import { PhotoScalarWhereInputObjectSchema } from "./PhotoScalarWhereInput.schema"
import { PhotoUncheckedUpdateManyWithoutPhotosInputObjectSchema } from "./PhotoUncheckedUpdateManyWithoutPhotosInput.schema"
import { PhotoUpdateManyMutationInputObjectSchema } from "./PhotoUpdateManyMutationInput.schema"

const Schema: z.ZodType<Prisma.PhotoUpdateManyWithWhereWithoutConceptsInput> = z
  .object({
    where: z.lazy(() => PhotoScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => PhotoUpdateManyMutationInputObjectSchema),
      z.lazy(() => PhotoUncheckedUpdateManyWithoutPhotosInputObjectSchema),
    ]),
  })
  .strict()

export const PhotoUpdateManyWithWhereWithoutConceptsInputObjectSchema = Schema
