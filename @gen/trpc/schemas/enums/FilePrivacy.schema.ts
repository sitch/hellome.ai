import { z } from "zod"

export const FilePrivacySchema = z.enum(["public", "private"])
