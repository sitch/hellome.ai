import { t, shieldedProcedure } from "./helpers/createRouter";
import { DreamBoothTrainingAggregateSchema } from "../schemas/aggregateDreamBoothTraining.schema";
import { DreamBoothTrainingCreateManySchema } from "../schemas/createManyDreamBoothTraining.schema";
import { DreamBoothTrainingCreateOneSchema } from "../schemas/createOneDreamBoothTraining.schema";
import { DreamBoothTrainingDeleteManySchema } from "../schemas/deleteManyDreamBoothTraining.schema";
import { DreamBoothTrainingDeleteOneSchema } from "../schemas/deleteOneDreamBoothTraining.schema";
import { DreamBoothTrainingFindFirstSchema } from "../schemas/findFirstDreamBoothTraining.schema";
import { DreamBoothTrainingFindManySchema } from "../schemas/findManyDreamBoothTraining.schema";
import { DreamBoothTrainingFindUniqueSchema } from "../schemas/findUniqueDreamBoothTraining.schema";
import { DreamBoothTrainingGroupBySchema } from "../schemas/groupByDreamBoothTraining.schema";
import { DreamBoothTrainingUpdateManySchema } from "../schemas/updateManyDreamBoothTraining.schema";
import { DreamBoothTrainingUpdateOneSchema } from "../schemas/updateOneDreamBoothTraining.schema";
import { DreamBoothTrainingUpsertSchema } from "../schemas/upsertOneDreamBoothTraining.schema";

export const dreamboothtrainingsRouter = t.router({
  aggregateDreamBoothTraining: shieldedProcedure
    .input(DreamBoothTrainingAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateDreamBoothTraining = await ctx.prisma.dreamBoothTraining.aggregate(input);
      return aggregateDreamBoothTraining;
    }),
  createManyDreamBoothTraining: shieldedProcedure
    .input(DreamBoothTrainingCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyDreamBoothTraining = await ctx.prisma.dreamBoothTraining.createMany(input);
      return createManyDreamBoothTraining;
    }),
  createOneDreamBoothTraining: shieldedProcedure
    .input(DreamBoothTrainingCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneDreamBoothTraining = await ctx.prisma.dreamBoothTraining.create(input);
      return createOneDreamBoothTraining;
    }),
  deleteManyDreamBoothTraining: shieldedProcedure
    .input(DreamBoothTrainingDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyDreamBoothTraining = await ctx.prisma.dreamBoothTraining.deleteMany(input);
      return deleteManyDreamBoothTraining;
    }),
  deleteOneDreamBoothTraining: shieldedProcedure
    .input(DreamBoothTrainingDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneDreamBoothTraining = await ctx.prisma.dreamBoothTraining.delete(input);
      return deleteOneDreamBoothTraining;
    }),
  findFirstDreamBoothTraining: shieldedProcedure
    .input(DreamBoothTrainingFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstDreamBoothTraining = await ctx.prisma.dreamBoothTraining.findFirst(input);
      return findFirstDreamBoothTraining;
    }),
  findFirstDreamBoothTrainingOrThrow: shieldedProcedure
    .input(DreamBoothTrainingFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstDreamBoothTrainingOrThrow = await ctx.prisma.dreamBoothTraining.findFirstOrThrow(input);
      return findFirstDreamBoothTrainingOrThrow;
    }),
  findManyDreamBoothTraining: shieldedProcedure
    .input(DreamBoothTrainingFindManySchema).query(async ({ ctx, input }) => {
      const findManyDreamBoothTraining = await ctx.prisma.dreamBoothTraining.findMany(input);
      return findManyDreamBoothTraining;
    }),
  findUniqueDreamBoothTraining: shieldedProcedure
    .input(DreamBoothTrainingFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueDreamBoothTraining = await ctx.prisma.dreamBoothTraining.findUnique(input);
      return findUniqueDreamBoothTraining;
    }),
  findUniqueDreamBoothTrainingOrThrow: shieldedProcedure
    .input(DreamBoothTrainingFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueDreamBoothTrainingOrThrow = await ctx.prisma.dreamBoothTraining.findUniqueOrThrow(input);
      return findUniqueDreamBoothTrainingOrThrow;
    }),
  groupByDreamBoothTraining: shieldedProcedure
    .input(DreamBoothTrainingGroupBySchema).query(async ({ ctx, input }) => {
      const groupByDreamBoothTraining = await ctx.prisma.dreamBoothTraining.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByDreamBoothTraining;
    }),
  updateManyDreamBoothTraining: shieldedProcedure
    .input(DreamBoothTrainingUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyDreamBoothTraining = await ctx.prisma.dreamBoothTraining.updateMany(input);
      return updateManyDreamBoothTraining;
    }),
  updateOneDreamBoothTraining: shieldedProcedure
    .input(DreamBoothTrainingUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneDreamBoothTraining = await ctx.prisma.dreamBoothTraining.update(input);
      return updateOneDreamBoothTraining;
    }),
  upsertOneDreamBoothTraining: shieldedProcedure
    .input(DreamBoothTrainingUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneDreamBoothTraining = await ctx.prisma.dreamBoothTraining.upsert(input);
      return upsertOneDreamBoothTraining;
    }),

}) 
