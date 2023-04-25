// import { t } from '@/server/createRouter'
// // import redisClient from "../utils/connectRedis";

// // const publicRouter = t.router({
// //   getHello: t.procedure.query(async ({ ctx }) => {
// //     const message = await redisClient.get("tRPC");
// //     return { message };
// //   }),
// // });

import { t } from '@gen/trpc/routers/helpers/createRouter'
import { conceptsRouter } from '@gen/trpc/routers/Concept.router'
import connectDB from '@/server/utils/prisma'

// Connect to Prisma
connectDB()

export const appRouter = t.mergeRouters(
  conceptsRouter
  // usersRouter,
)

export type AppRouter = typeof appRouter
