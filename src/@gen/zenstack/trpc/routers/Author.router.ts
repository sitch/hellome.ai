/* eslint-disable */
import { db, type BaseConfig, type ProcBuilder, type RouterFactory } from "."
import { checkMutate, checkRead } from "../helper"
import { AuthorSchema } from "../schemas/Author.schema"

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    aggregate: procedure
      .input(AuthorSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).author.aggregate(input))),

    createMany: procedure
      .input(AuthorSchema.createMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).author.createMany(input)),
      ),

    create: procedure
      .input(AuthorSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).author.create(input)),
      ),

    deleteMany: procedure
      .input(AuthorSchema.deleteMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).author.deleteMany(input)),
      ),

    delete: procedure
      .input(AuthorSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).author.delete(input)),
      ),

    findFirst: procedure
      .input(AuthorSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).author.findFirst(input))),

    findFirstOrThrow: procedure
      .input(AuthorSchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).author.findFirstOrThrow(input)),
      ),

    findMany: procedure
      .input(AuthorSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).author.findMany(input))),

    findUnique: procedure
      .input(AuthorSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).author.findUnique(input))),

    findUniqueOrThrow: procedure
      .input(AuthorSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).author.findUniqueOrThrow(input)),
      ),

    groupBy: procedure
      .input(AuthorSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).author.groupBy(input))),

    updateMany: procedure
      .input(AuthorSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).author.updateMany(input)),
      ),

    update: procedure
      .input(AuthorSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).author.update(input)),
      ),

    upsert: procedure
      .input(AuthorSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).author.upsert(input)),
      ),
  })
}
