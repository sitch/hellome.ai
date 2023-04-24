import { t, shieldedProcedure } from './helpers/createRouter'
import { EditionAggregateSchema } from '../schemas/aggregateEdition.schema'
import { EditionCreateManySchema } from '../schemas/createManyEdition.schema'
import { EditionCreateOneSchema } from '../schemas/createOneEdition.schema'
import { EditionDeleteManySchema } from '../schemas/deleteManyEdition.schema'
import { EditionDeleteOneSchema } from '../schemas/deleteOneEdition.schema'
import { EditionFindFirstSchema } from '../schemas/findFirstEdition.schema'
import { EditionFindManySchema } from '../schemas/findManyEdition.schema'
import { EditionFindUniqueSchema } from '../schemas/findUniqueEdition.schema'
import { EditionGroupBySchema } from '../schemas/groupByEdition.schema'
import { EditionUpdateManySchema } from '../schemas/updateManyEdition.schema'
import { EditionUpdateOneSchema } from '../schemas/updateOneEdition.schema'
import { EditionUpsertSchema } from '../schemas/upsertOneEdition.schema'

export const editionsRouter = t.router({
  aggregateEdition: shieldedProcedure
    .input(EditionAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateEdition = await ctx.prisma.edition.aggregate(input)
      return aggregateEdition
    }),
  createManyEdition: shieldedProcedure
    .input(EditionCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyEdition = await ctx.prisma.edition.createMany(input)
      return createManyEdition
    }),
  createOneEdition: shieldedProcedure
    .input(EditionCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneEdition = await ctx.prisma.edition.create(input)
      return createOneEdition
    }),
  deleteManyEdition: shieldedProcedure
    .input(EditionDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyEdition = await ctx.prisma.edition.deleteMany(input)
      return deleteManyEdition
    }),
  deleteOneEdition: shieldedProcedure
    .input(EditionDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneEdition = await ctx.prisma.edition.delete(input)
      return deleteOneEdition
    }),
  findFirstEdition: shieldedProcedure
    .input(EditionFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstEdition = await ctx.prisma.edition.findFirst(input)
      return findFirstEdition
    }),
  findFirstEditionOrThrow: shieldedProcedure
    .input(EditionFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstEditionOrThrow = await ctx.prisma.edition.findFirstOrThrow(
        input
      )
      return findFirstEditionOrThrow
    }),
  findManyEdition: shieldedProcedure
    .input(EditionFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyEdition = await ctx.prisma.edition.findMany(input)
      return findManyEdition
    }),
  findUniqueEdition: shieldedProcedure
    .input(EditionFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueEdition = await ctx.prisma.edition.findUnique(input)
      return findUniqueEdition
    }),
  findUniqueEditionOrThrow: shieldedProcedure
    .input(EditionFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueEditionOrThrow =
        await ctx.prisma.edition.findUniqueOrThrow(input)
      return findUniqueEditionOrThrow
    }),
  groupByEdition: shieldedProcedure
    .input(EditionGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByEdition = await ctx.prisma.edition.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      })
      return groupByEdition
    }),
  updateManyEdition: shieldedProcedure
    .input(EditionUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyEdition = await ctx.prisma.edition.updateMany(input)
      return updateManyEdition
    }),
  updateOneEdition: shieldedProcedure
    .input(EditionUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneEdition = await ctx.prisma.edition.update(input)
      return updateOneEdition
    }),
  upsertOneEdition: shieldedProcedure
    .input(EditionUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneEdition = await ctx.prisma.edition.upsert(input)
      return upsertOneEdition
    }),
})
