import { t, shieldedProcedure } from "./helpers/createRouter";
import { TranslatorAggregateSchema } from "../schemas/aggregateTranslator.schema";
import { TranslatorCreateManySchema } from "../schemas/createManyTranslator.schema";
import { TranslatorCreateOneSchema } from "../schemas/createOneTranslator.schema";
import { TranslatorDeleteManySchema } from "../schemas/deleteManyTranslator.schema";
import { TranslatorDeleteOneSchema } from "../schemas/deleteOneTranslator.schema";
import { TranslatorFindFirstSchema } from "../schemas/findFirstTranslator.schema";
import { TranslatorFindManySchema } from "../schemas/findManyTranslator.schema";
import { TranslatorFindUniqueSchema } from "../schemas/findUniqueTranslator.schema";
import { TranslatorGroupBySchema } from "../schemas/groupByTranslator.schema";
import { TranslatorUpdateManySchema } from "../schemas/updateManyTranslator.schema";
import { TranslatorUpdateOneSchema } from "../schemas/updateOneTranslator.schema";
import { TranslatorUpsertSchema } from "../schemas/upsertOneTranslator.schema";

export const translatorsRouter = t.router({
  aggregateTranslator: shieldedProcedure
    .input(TranslatorAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateTranslator = await ctx.prisma.translator.aggregate(input);
      return aggregateTranslator;
    }),
  createManyTranslator: shieldedProcedure
    .input(TranslatorCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyTranslator = await ctx.prisma.translator.createMany(input);
      return createManyTranslator;
    }),
  createOneTranslator: shieldedProcedure
    .input(TranslatorCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneTranslator = await ctx.prisma.translator.create(input);
      return createOneTranslator;
    }),
  deleteManyTranslator: shieldedProcedure
    .input(TranslatorDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyTranslator = await ctx.prisma.translator.deleteMany(input);
      return deleteManyTranslator;
    }),
  deleteOneTranslator: shieldedProcedure
    .input(TranslatorDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneTranslator = await ctx.prisma.translator.delete(input);
      return deleteOneTranslator;
    }),
  findFirstTranslator: shieldedProcedure
    .input(TranslatorFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTranslator = await ctx.prisma.translator.findFirst(input);
      return findFirstTranslator;
    }),
  findFirstTranslatorOrThrow: shieldedProcedure
    .input(TranslatorFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTranslatorOrThrow = await ctx.prisma.translator.findFirstOrThrow(input);
      return findFirstTranslatorOrThrow;
    }),
  findManyTranslator: shieldedProcedure
    .input(TranslatorFindManySchema).query(async ({ ctx, input }) => {
      const findManyTranslator = await ctx.prisma.translator.findMany(input);
      return findManyTranslator;
    }),
  findUniqueTranslator: shieldedProcedure
    .input(TranslatorFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTranslator = await ctx.prisma.translator.findUnique(input);
      return findUniqueTranslator;
    }),
  findUniqueTranslatorOrThrow: shieldedProcedure
    .input(TranslatorFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTranslatorOrThrow = await ctx.prisma.translator.findUniqueOrThrow(input);
      return findUniqueTranslatorOrThrow;
    }),
  groupByTranslator: shieldedProcedure
    .input(TranslatorGroupBySchema).query(async ({ ctx, input }) => {
      const groupByTranslator = await ctx.prisma.translator.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTranslator;
    }),
  updateManyTranslator: shieldedProcedure
    .input(TranslatorUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyTranslator = await ctx.prisma.translator.updateMany(input);
      return updateManyTranslator;
    }),
  updateOneTranslator: shieldedProcedure
    .input(TranslatorUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneTranslator = await ctx.prisma.translator.update(input);
      return updateOneTranslator;
    }),
  upsertOneTranslator: shieldedProcedure
    .input(TranslatorUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneTranslator = await ctx.prisma.translator.upsert(input);
      return upsertOneTranslator;
    }),

}) 
