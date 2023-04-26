// import { t } from '@/server/createRouter'
// // import redisClient from "../utils/connectRedis";

// // const publicRouter = t.router({
// //   getHello: t.procedure.query(async ({ ctx }) => {
// //     const message = await redisClient.get("tRPC");
// //     return { message };
// //   }),
// // });

import { t } from "@gen/trpc/routers/helpers/createRouter"
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server"

import { conceptRouter } from "@/server/routers/concept.router"
// import { conceptsRouter } from '@gen/trpc/routers/Concept.router'
import connectDB from "@/server/utils/prisma"

// Connect to Prisma
connectDB()

export const appRouter = t.mergeRouters(
  // conceptsRouter
  conceptRouter
  // usersRouter,
)

export type AppRouter = typeof appRouter

export type AppRouterInput = inferRouterInputs<AppRouter>
export type AppRouterOutput = inferRouterOutputs<AppRouter>
