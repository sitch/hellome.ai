import { t, shieldedProcedure } from "./helpers/createRouter";
import { PredictionAggregateSchema } from "../schemas/aggregatePrediction.schema";
import { PredictionCreateManySchema } from "../schemas/createManyPrediction.schema";
import { PredictionCreateOneSchema } from "../schemas/createOnePrediction.schema";
import { PredictionDeleteManySchema } from "../schemas/deleteManyPrediction.schema";
import { PredictionDeleteOneSchema } from "../schemas/deleteOnePrediction.schema";
import { PredictionFindFirstSchema } from "../schemas/findFirstPrediction.schema";
import { PredictionFindManySchema } from "../schemas/findManyPrediction.schema";
import { PredictionFindUniqueSchema } from "../schemas/findUniquePrediction.schema";
import { PredictionGroupBySchema } from "../schemas/groupByPrediction.schema";
import { PredictionUpdateManySchema } from "../schemas/updateManyPrediction.schema";
import { PredictionUpdateOneSchema } from "../schemas/updateOnePrediction.schema";
import { PredictionUpsertSchema } from "../schemas/upsertOnePrediction.schema";

export const predictionsRouter = t.router({
  aggregatePrediction: shieldedProcedure
    .input(PredictionAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrediction = await ctx.prisma.prediction.aggregate(input);
      return aggregatePrediction;
    }),
  createManyPrediction: shieldedProcedure
    .input(PredictionCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrediction = await ctx.prisma.prediction.createMany(input);
      return createManyPrediction;
    }),
  createOnePrediction: shieldedProcedure
    .input(PredictionCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrediction = await ctx.prisma.prediction.create(input);
      return createOnePrediction;
    }),
  deleteManyPrediction: shieldedProcedure
    .input(PredictionDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrediction = await ctx.prisma.prediction.deleteMany(input);
      return deleteManyPrediction;
    }),
  deleteOnePrediction: shieldedProcedure
    .input(PredictionDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrediction = await ctx.prisma.prediction.delete(input);
      return deleteOnePrediction;
    }),
  findFirstPrediction: shieldedProcedure
    .input(PredictionFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrediction = await ctx.prisma.prediction.findFirst(input);
      return findFirstPrediction;
    }),
  findFirstPredictionOrThrow: shieldedProcedure
    .input(PredictionFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPredictionOrThrow = await ctx.prisma.prediction.findFirstOrThrow(input);
      return findFirstPredictionOrThrow;
    }),
  findManyPrediction: shieldedProcedure
    .input(PredictionFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrediction = await ctx.prisma.prediction.findMany(input);
      return findManyPrediction;
    }),
  findUniquePrediction: shieldedProcedure
    .input(PredictionFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrediction = await ctx.prisma.prediction.findUnique(input);
      return findUniquePrediction;
    }),
  findUniquePredictionOrThrow: shieldedProcedure
    .input(PredictionFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePredictionOrThrow = await ctx.prisma.prediction.findUniqueOrThrow(input);
      return findUniquePredictionOrThrow;
    }),
  groupByPrediction: shieldedProcedure
    .input(PredictionGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrediction = await ctx.prisma.prediction.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrediction;
    }),
  updateManyPrediction: shieldedProcedure
    .input(PredictionUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrediction = await ctx.prisma.prediction.updateMany(input);
      return updateManyPrediction;
    }),
  updateOnePrediction: shieldedProcedure
    .input(PredictionUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrediction = await ctx.prisma.prediction.update(input);
      return updateOnePrediction;
    }),
  upsertOnePrediction: shieldedProcedure
    .input(PredictionUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrediction = await ctx.prisma.prediction.upsert(input);
      return upsertOnePrediction;
    }),

}) 
