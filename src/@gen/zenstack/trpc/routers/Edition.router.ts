/* eslint-disable */
import { db, type BaseConfig, type ProcBuilder, type RouterFactory } from "."
import { checkMutate, checkRead } from "../helper"
import { EditionSchema } from "../schemas/Edition.schema"

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    aggregate: procedure
      .input(EditionSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).edition.aggregate(input))),

    createMany: procedure
      .input(EditionSchema.createMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).edition.createMany(input)),
      ),

    create: procedure
      .input(EditionSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).edition.create(input)),
      ),

    deleteMany: procedure
      .input(EditionSchema.deleteMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).edition.deleteMany(input)),
      ),

    delete: procedure
      .input(EditionSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).edition.delete(input)),
      ),

    findFirst: procedure
      .input(EditionSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).edition.findFirst(input))),

    findFirstOrThrow: procedure
      .input(EditionSchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).edition.findFirstOrThrow(input)),
      ),

    findMany: procedure
      .input(EditionSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).edition.findMany(input))),

    findUnique: procedure
      .input(EditionSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).edition.findUnique(input))),

    findUniqueOrThrow: procedure
      .input(EditionSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).edition.findUniqueOrThrow(input)),
      ),

    groupBy: procedure
      .input(EditionSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).edition.groupBy(input))),

    updateMany: procedure
      .input(EditionSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).edition.updateMany(input)),
      ),

    update: procedure
      .input(EditionSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).edition.update(input)),
      ),

    upsert: procedure
      .input(EditionSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).edition.upsert(input)),
      ),
  })
}
