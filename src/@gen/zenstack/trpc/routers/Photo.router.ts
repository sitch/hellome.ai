/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from "."
import { checkRead, checkMutate } from "../helper"
import { PhotoSchema } from "../schemas/Photo.schema"

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    aggregate: procedure
      .input(PhotoSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).photo.aggregate(input))),

    createMany: procedure
      .input(PhotoSchema.createMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).photo.createMany(input)),
      ),

    create: procedure
      .input(PhotoSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).photo.create(input)),
      ),

    deleteMany: procedure
      .input(PhotoSchema.deleteMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).photo.deleteMany(input)),
      ),

    delete: procedure
      .input(PhotoSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).photo.delete(input)),
      ),

    findFirst: procedure
      .input(PhotoSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).photo.findFirst(input))),

    findFirstOrThrow: procedure
      .input(PhotoSchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).photo.findFirstOrThrow(input)),
      ),

    findMany: procedure
      .input(PhotoSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).photo.findMany(input))),

    findUnique: procedure
      .input(PhotoSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).photo.findUnique(input))),

    findUniqueOrThrow: procedure
      .input(PhotoSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).photo.findUniqueOrThrow(input)),
      ),

    groupBy: procedure
      .input(PhotoSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).photo.groupBy(input))),

    updateMany: procedure
      .input(PhotoSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).photo.updateMany(input)),
      ),

    update: procedure
      .input(PhotoSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).photo.update(input)),
      ),

    upsert: procedure
      .input(PhotoSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).photo.upsert(input)),
      ),
  })
}
