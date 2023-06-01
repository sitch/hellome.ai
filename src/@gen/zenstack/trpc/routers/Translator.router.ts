/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from "."
import { checkRead, checkMutate } from "../helper"
import { TranslatorSchema } from "../schemas/Translator.schema"

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    aggregate: procedure
      .input(TranslatorSchema.aggregate)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).translator.aggregate(input)),
      ),

    createMany: procedure
      .input(TranslatorSchema.createMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).translator.createMany(input)),
      ),

    create: procedure
      .input(TranslatorSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).translator.create(input)),
      ),

    deleteMany: procedure
      .input(TranslatorSchema.deleteMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).translator.deleteMany(input)),
      ),

    delete: procedure
      .input(TranslatorSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).translator.delete(input)),
      ),

    findFirst: procedure
      .input(TranslatorSchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).translator.findFirst(input)),
      ),

    findFirstOrThrow: procedure
      .input(TranslatorSchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).translator.findFirstOrThrow(input)),
      ),

    findMany: procedure
      .input(TranslatorSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).translator.findMany(input))),

    findUnique: procedure
      .input(TranslatorSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).translator.findUnique(input)),
      ),

    findUniqueOrThrow: procedure
      .input(TranslatorSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).translator.findUniqueOrThrow(input)),
      ),

    groupBy: procedure
      .input(TranslatorSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).translator.groupBy(input))),

    updateMany: procedure
      .input(TranslatorSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).translator.updateMany(input)),
      ),

    update: procedure
      .input(TranslatorSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).translator.update(input)),
      ),

    upsert: procedure
      .input(TranslatorSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).translator.upsert(input)),
      ),
  })
}
