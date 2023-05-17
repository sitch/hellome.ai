import { conceptRouter } from "@/server/api/routers/concept.router"
import { replicateRouter } from "@/server/api/routers/replicate.router"
import { createTRPCRouter } from "@/server/api/trpc"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  concept: conceptRouter,
  replicate: replicateRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
