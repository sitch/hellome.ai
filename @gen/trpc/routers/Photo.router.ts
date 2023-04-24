import { t, shieldedProcedure } from './helpers/createRouter'
import { PhotoAggregateSchema } from '../schemas/aggregatePhoto.schema'
import { PhotoCreateManySchema } from '../schemas/createManyPhoto.schema'
import { PhotoCreateOneSchema } from '../schemas/createOnePhoto.schema'
import { PhotoDeleteManySchema } from '../schemas/deleteManyPhoto.schema'
import { PhotoDeleteOneSchema } from '../schemas/deleteOnePhoto.schema'
import { PhotoFindFirstSchema } from '../schemas/findFirstPhoto.schema'
import { PhotoFindManySchema } from '../schemas/findManyPhoto.schema'
import { PhotoFindUniqueSchema } from '../schemas/findUniquePhoto.schema'
import { PhotoGroupBySchema } from '../schemas/groupByPhoto.schema'
import { PhotoUpdateManySchema } from '../schemas/updateManyPhoto.schema'
import { PhotoUpdateOneSchema } from '../schemas/updateOnePhoto.schema'
import { PhotoUpsertSchema } from '../schemas/upsertOnePhoto.schema'

export const photosRouter = t.router({
  aggregatePhoto: shieldedProcedure
    .input(PhotoAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregatePhoto = await ctx.prisma.photo.aggregate(input)
      return aggregatePhoto
    }),
  createManyPhoto: shieldedProcedure
    .input(PhotoCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyPhoto = await ctx.prisma.photo.createMany(input)
      return createManyPhoto
    }),
  createOnePhoto: shieldedProcedure
    .input(PhotoCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOnePhoto = await ctx.prisma.photo.create(input)
      return createOnePhoto
    }),
  deleteManyPhoto: shieldedProcedure
    .input(PhotoDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyPhoto = await ctx.prisma.photo.deleteMany(input)
      return deleteManyPhoto
    }),
  deleteOnePhoto: shieldedProcedure
    .input(PhotoDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOnePhoto = await ctx.prisma.photo.delete(input)
      return deleteOnePhoto
    }),
  findFirstPhoto: shieldedProcedure
    .input(PhotoFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstPhoto = await ctx.prisma.photo.findFirst(input)
      return findFirstPhoto
    }),
  findFirstPhotoOrThrow: shieldedProcedure
    .input(PhotoFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstPhotoOrThrow = await ctx.prisma.photo.findFirstOrThrow(
        input
      )
      return findFirstPhotoOrThrow
    }),
  findManyPhoto: shieldedProcedure
    .input(PhotoFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyPhoto = await ctx.prisma.photo.findMany(input)
      return findManyPhoto
    }),
  findUniquePhoto: shieldedProcedure
    .input(PhotoFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniquePhoto = await ctx.prisma.photo.findUnique(input)
      return findUniquePhoto
    }),
  findUniquePhotoOrThrow: shieldedProcedure
    .input(PhotoFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniquePhotoOrThrow = await ctx.prisma.photo.findUniqueOrThrow(
        input
      )
      return findUniquePhotoOrThrow
    }),
  groupByPhoto: shieldedProcedure
    .input(PhotoGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByPhoto = await ctx.prisma.photo.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      })
      return groupByPhoto
    }),
  updateManyPhoto: shieldedProcedure
    .input(PhotoUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyPhoto = await ctx.prisma.photo.updateMany(input)
      return updateManyPhoto
    }),
  updateOnePhoto: shieldedProcedure
    .input(PhotoUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOnePhoto = await ctx.prisma.photo.update(input)
      return updateOnePhoto
    }),
  upsertOnePhoto: shieldedProcedure
    .input(PhotoUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOnePhoto = await ctx.prisma.photo.upsert(input)
      return upsertOnePhoto
    }),
})
