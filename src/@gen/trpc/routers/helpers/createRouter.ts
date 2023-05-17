import * as trpc from "@trpc/server";
import { permissions } from "../../shield/shield";

import type { Context } from '../../../../../server/context';

import trpcOptions from '../../../../../server/trpcOptions';

export const t = trpc.initTRPC.context<Context>().create(trpcOptions);

export const permissionsMiddleware = t.middleware(permissions);

export const publicProcedure = t.procedure;

export const shieldedProcedure = t.procedure

  .use(permissionsMiddleware)





