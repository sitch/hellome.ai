// import { NextRequestHandler } from '@zenstackhq/server/next';
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { withPresets } from '@zenstackhq/runtime';
// import { getSessionUser } from '../../../lib/auth.ts';
// // create an enhanced Prisma client with user context
// function getPrisma(req: NextApiRequest, res: NextApiResponse) {
//     // getSessionUser extracts the current session user from the request, its
//     // implementation depends on your auth solution
//     return withPresets({ user: getSessionUser(req, res) });
// }
// // create the request handler with the `getPrisma` hook
// export default NextRequestHandler({ getPrisma });

// import { withPresets } from "@zenstackhq/runtime";
// import { NextRequestHandler } from "@zenstackhq/server/next";
// import type { NextApiRequest, NextApiResponse } from "next";
// import { getServerAuthSession } from "../../../server/common/get-server-auth-session";
// import { prisma } from "../../../server/db/client";

// async function getPrisma(req: NextApiRequest, res: NextApiResponse) {
//   const session = await getServerAuthSession({ req, res });
//   // create a wrapper of Prisma client that enforces access policy,
//   // data validation, and @password, @omit behaviors
//   return withPresets(prisma, { user: session?.user });
// }

// export default NextRequestHandler({ getPrisma });
