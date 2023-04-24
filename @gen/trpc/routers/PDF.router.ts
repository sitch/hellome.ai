import { t, shieldedProcedure } from './helpers/createRouter'
import { PDFAggregateSchema } from '../schemas/aggregatePDF.schema'
import { PDFCreateManySchema } from '../schemas/createManyPDF.schema'
import { PDFCreateOneSchema } from '../schemas/createOnePDF.schema'
import { PDFDeleteManySchema } from '../schemas/deleteManyPDF.schema'
import { PDFDeleteOneSchema } from '../schemas/deleteOnePDF.schema'
import { PDFFindFirstSchema } from '../schemas/findFirstPDF.schema'
import { PDFFindManySchema } from '../schemas/findManyPDF.schema'
import { PDFFindUniqueSchema } from '../schemas/findUniquePDF.schema'
import { PDFGroupBySchema } from '../schemas/groupByPDF.schema'
import { PDFUpdateManySchema } from '../schemas/updateManyPDF.schema'
import { PDFUpdateOneSchema } from '../schemas/updateOnePDF.schema'
import { PDFUpsertSchema } from '../schemas/upsertOnePDF.schema'

export const pdfsRouter = t.router({
  aggregatePDF: shieldedProcedure
    .input(PDFAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregatePDF = await ctx.prisma.pDF.aggregate(input)
      return aggregatePDF
    }),
  createManyPDF: shieldedProcedure
    .input(PDFCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyPDF = await ctx.prisma.pDF.createMany(input)
      return createManyPDF
    }),
  createOnePDF: shieldedProcedure
    .input(PDFCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOnePDF = await ctx.prisma.pDF.create(input)
      return createOnePDF
    }),
  deleteManyPDF: shieldedProcedure
    .input(PDFDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyPDF = await ctx.prisma.pDF.deleteMany(input)
      return deleteManyPDF
    }),
  deleteOnePDF: shieldedProcedure
    .input(PDFDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOnePDF = await ctx.prisma.pDF.delete(input)
      return deleteOnePDF
    }),
  findFirstPDF: shieldedProcedure
    .input(PDFFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstPDF = await ctx.prisma.pDF.findFirst(input)
      return findFirstPDF
    }),
  findFirstPDFOrThrow: shieldedProcedure
    .input(PDFFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstPDFOrThrow = await ctx.prisma.pDF.findFirstOrThrow(input)
      return findFirstPDFOrThrow
    }),
  findManyPDF: shieldedProcedure
    .input(PDFFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyPDF = await ctx.prisma.pDF.findMany(input)
      return findManyPDF
    }),
  findUniquePDF: shieldedProcedure
    .input(PDFFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniquePDF = await ctx.prisma.pDF.findUnique(input)
      return findUniquePDF
    }),
  findUniquePDFOrThrow: shieldedProcedure
    .input(PDFFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniquePDFOrThrow = await ctx.prisma.pDF.findUniqueOrThrow(input)
      return findUniquePDFOrThrow
    }),
  groupByPDF: shieldedProcedure
    .input(PDFGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByPDF = await ctx.prisma.pDF.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      })
      return groupByPDF
    }),
  updateManyPDF: shieldedProcedure
    .input(PDFUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyPDF = await ctx.prisma.pDF.updateMany(input)
      return updateManyPDF
    }),
  updateOnePDF: shieldedProcedure
    .input(PDFUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOnePDF = await ctx.prisma.pDF.update(input)
      return updateOnePDF
    }),
  upsertOnePDF: shieldedProcedure
    .input(PDFUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOnePDF = await ctx.prisma.pDF.upsert(input)
      return upsertOnePDF
    }),
})
