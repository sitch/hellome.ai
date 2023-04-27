import { z } from "zod"

import { CloudFileUpdateManyMutationInputObjectSchema } from "./objects/CloudFileUpdateManyMutationInput.schema"
import { CloudFileWhereInputObjectSchema } from "./objects/CloudFileWhereInput.schema"

export const CloudFileUpdateManySchema = z.object({
  data: CloudFileUpdateManyMutationInputObjectSchema,
  where: CloudFileWhereInputObjectSchema.optional(),
})
