import { z } from "zod"

import { PageWhereInputObjectSchema } from "./objects/PageWhereInput.schema"

export const PageDeleteManySchema = z.object({
  where: PageWhereInputObjectSchema.optional(),
})
