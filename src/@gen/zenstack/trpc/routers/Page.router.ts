/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from "."
import { checkRead, checkMutate } from "../helper"
import { PageSchema } from "../schemas/Page.schema"

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    aggregate: procedure
      .input(PageSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).page.aggregate(input))),

    createMany: procedure
      .input(PageSchema.createMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).page.createMany(input)),
      ),

    create: procedure
      .input(PageSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).page.create(input)),
      ),

    deleteMany: procedure
      .input(PageSchema.deleteMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).page.deleteMany(input)),
      ),

    delete: procedure
      .input(PageSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).page.delete(input)),
      ),

    findFirst: procedure
      .input(PageSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).page.findFirst(input))),

    findFirstOrThrow: procedure
      .input(PageSchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).page.findFirstOrThrow(input)),
      ),

    findMany: procedure
      .input(PageSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).page.findMany(input))),

    findUnique: procedure
      .input(PageSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).page.findUnique(input))),

    findUniqueOrThrow: procedure
      .input(PageSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).page.findUniqueOrThrow(input)),
      ),

    groupBy: procedure
      .input(PageSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).page.groupBy(input))),

    updateMany: procedure
      .input(PageSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).page.updateMany(input)),
      ),

    update: procedure
      .input(PageSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).page.update(input)),
      ),

    upsert: procedure
      .input(PageSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).page.upsert(input)),
      ),
  })
}
