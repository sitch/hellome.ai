/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from "."
import { checkRead, checkMutate } from "../helper"
import { PDFSchema } from "../schemas/PDF.schema"

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    aggregate: procedure
      .input(PDFSchema.aggregate)
      .query(({ ctx, input }) => checkRead(db(ctx).pDF.aggregate(input))),

    createMany: procedure
      .input(PDFSchema.createMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pDF.createMany(input)),
      ),

    create: procedure
      .input(PDFSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pDF.create(input)),
      ),

    deleteMany: procedure
      .input(PDFSchema.deleteMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pDF.deleteMany(input)),
      ),

    delete: procedure
      .input(PDFSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pDF.delete(input)),
      ),

    findFirst: procedure
      .input(PDFSchema.findFirst)
      .query(({ ctx, input }) => checkRead(db(ctx).pDF.findFirst(input))),

    findFirstOrThrow: procedure
      .input(PDFSchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).pDF.findFirstOrThrow(input)),
      ),

    findMany: procedure
      .input(PDFSchema.findMany)
      .query(({ ctx, input }) => checkRead(db(ctx).pDF.findMany(input))),

    findUnique: procedure
      .input(PDFSchema.findUnique)
      .query(({ ctx, input }) => checkRead(db(ctx).pDF.findUnique(input))),

    findUniqueOrThrow: procedure
      .input(PDFSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).pDF.findUniqueOrThrow(input)),
      ),

    groupBy: procedure
      .input(PDFSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).pDF.groupBy(input))),

    updateMany: procedure
      .input(PDFSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pDF.updateMany(input)),
      ),

    update: procedure
      .input(PDFSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pDF.update(input)),
      ),

    upsert: procedure
      .input(PDFSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).pDF.upsert(input)),
      ),
  })
}
