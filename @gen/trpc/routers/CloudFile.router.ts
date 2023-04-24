import { t, shieldedProcedure } from './helpers/createRouter'
import { CloudFileAggregateSchema } from '../schemas/aggregateCloudFile.schema'
import { CloudFileCreateManySchema } from '../schemas/createManyCloudFile.schema'
import { CloudFileCreateOneSchema } from '../schemas/createOneCloudFile.schema'
import { CloudFileDeleteManySchema } from '../schemas/deleteManyCloudFile.schema'
import { CloudFileDeleteOneSchema } from '../schemas/deleteOneCloudFile.schema'
import { CloudFileFindFirstSchema } from '../schemas/findFirstCloudFile.schema'
import { CloudFileFindManySchema } from '../schemas/findManyCloudFile.schema'
import { CloudFileFindUniqueSchema } from '../schemas/findUniqueCloudFile.schema'
import { CloudFileGroupBySchema } from '../schemas/groupByCloudFile.schema'
import { CloudFileUpdateManySchema } from '../schemas/updateManyCloudFile.schema'
import { CloudFileUpdateOneSchema } from '../schemas/updateOneCloudFile.schema'
import { CloudFileUpsertSchema } from '../schemas/upsertOneCloudFile.schema'

export const cloudfilesRouter = t.router({
  aggregateCloudFile: shieldedProcedure
    .input(CloudFileAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateCloudFile = await ctx.prisma.cloudFile.aggregate(input)
      return aggregateCloudFile
    }),
  createManyCloudFile: shieldedProcedure
    .input(CloudFileCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyCloudFile = await ctx.prisma.cloudFile.createMany(input)
      return createManyCloudFile
    }),
  createOneCloudFile: shieldedProcedure
    .input(CloudFileCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneCloudFile = await ctx.prisma.cloudFile.create(input)
      return createOneCloudFile
    }),
  deleteManyCloudFile: shieldedProcedure
    .input(CloudFileDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyCloudFile = await ctx.prisma.cloudFile.deleteMany(input)
      return deleteManyCloudFile
    }),
  deleteOneCloudFile: shieldedProcedure
    .input(CloudFileDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneCloudFile = await ctx.prisma.cloudFile.delete(input)
      return deleteOneCloudFile
    }),
  findFirstCloudFile: shieldedProcedure
    .input(CloudFileFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstCloudFile = await ctx.prisma.cloudFile.findFirst(input)
      return findFirstCloudFile
    }),
  findFirstCloudFileOrThrow: shieldedProcedure
    .input(CloudFileFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstCloudFileOrThrow =
        await ctx.prisma.cloudFile.findFirstOrThrow(input)
      return findFirstCloudFileOrThrow
    }),
  findManyCloudFile: shieldedProcedure
    .input(CloudFileFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyCloudFile = await ctx.prisma.cloudFile.findMany(input)
      return findManyCloudFile
    }),
  findUniqueCloudFile: shieldedProcedure
    .input(CloudFileFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueCloudFile = await ctx.prisma.cloudFile.findUnique(input)
      return findUniqueCloudFile
    }),
  findUniqueCloudFileOrThrow: shieldedProcedure
    .input(CloudFileFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueCloudFileOrThrow =
        await ctx.prisma.cloudFile.findUniqueOrThrow(input)
      return findUniqueCloudFileOrThrow
    }),
  groupByCloudFile: shieldedProcedure
    .input(CloudFileGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByCloudFile = await ctx.prisma.cloudFile.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      })
      return groupByCloudFile
    }),
  updateManyCloudFile: shieldedProcedure
    .input(CloudFileUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyCloudFile = await ctx.prisma.cloudFile.updateMany(input)
      return updateManyCloudFile
    }),
  updateOneCloudFile: shieldedProcedure
    .input(CloudFileUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneCloudFile = await ctx.prisma.cloudFile.update(input)
      return updateOneCloudFile
    }),
  upsertOneCloudFile: shieldedProcedure
    .input(CloudFileUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneCloudFile = await ctx.prisma.cloudFile.upsert(input)
      return upsertOneCloudFile
    }),
})
