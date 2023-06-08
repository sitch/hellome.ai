/* eslint-disable */
import { z } from "zod"

export const ConceptStatusSchema = z.enum(["CREATED", "TRAINING", "TRAINED"])
