import { t, publicProcedure } from "./helpers/createRouter";
import { WorksAggregateSchema } from "../schemas/aggregateWorks.schema";
import { WorksCreateOneSchema } from "../schemas/createOneWorks.schema";
import { WorksDeleteManySchema } from "../schemas/deleteManyWorks.schema";
import { WorksDeleteOneSchema } from "../schemas/deleteOneWorks.schema";
import { WorksFindFirstSchema } from "../schemas/findFirstWorks.schema";
import { WorksFindManySchema } from "../schemas/findManyWorks.schema";
import { WorksFindUniqueSchema } from "../schemas/findUniqueWorks.schema";
import { WorksGroupBySchema } from "../schemas/groupByWorks.schema";
import { WorksUpdateManySchema } from "../schemas/updateManyWorks.schema";
import { WorksUpdateOneSchema } from "../schemas/updateOneWorks.schema";
import { WorksUpsertSchema } from "../schemas/upsertOneWorks.schema";

export const worksRouter = t.createTRPCRouter({
  aggregateWorks: publicProcedure
    .input(WorksAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateWorks = await ctx.prisma.works.aggregate(input);
      return aggregateWorks;
    }),
  createOneWorks: publicProcedure
    .input(WorksCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneWorks = await ctx.prisma.works.create(input);
      return createOneWorks;
    }),
  deleteManyWorks: publicProcedure
    .input(WorksDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyWorks = await ctx.prisma.works.deleteMany(input);
      return deleteManyWorks;
    }),
  deleteOneWorks: publicProcedure
    .input(WorksDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneWorks = await ctx.prisma.works.delete(input);
      return deleteOneWorks;
    }),
  findFirstWorks: publicProcedure
    .input(WorksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstWorks = await ctx.prisma.works.findFirst(input);
      return findFirstWorks;
    }),
  findFirstWorksOrThrow: publicProcedure
    .input(WorksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstWorksOrThrow = await ctx.prisma.works.findFirstOrThrow(input);
      return findFirstWorksOrThrow;
    }),
  findManyWorks: publicProcedure
    .input(WorksFindManySchema).query(async ({ ctx, input }) => {
      const findManyWorks = await ctx.prisma.works.findMany(input);
      return findManyWorks;
    }),
  findUniqueWorks: publicProcedure
    .input(WorksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueWorks = await ctx.prisma.works.findUnique(input);
      return findUniqueWorks;
    }),
  findUniqueWorksOrThrow: publicProcedure
    .input(WorksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueWorksOrThrow = await ctx.prisma.works.findUniqueOrThrow(input);
      return findUniqueWorksOrThrow;
    }),
  groupByWorks: publicProcedure
    .input(WorksGroupBySchema).query(async ({ ctx, input }) => {
      const groupByWorks = await ctx.prisma.works.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByWorks;
    }),
  updateManyWorks: publicProcedure
    .input(WorksUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyWorks = await ctx.prisma.works.updateMany(input);
      return updateManyWorks;
    }),
  updateOneWorks: publicProcedure
    .input(WorksUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneWorks = await ctx.prisma.works.update(input);
      return updateOneWorks;
    }),
  upsertOneWorks: publicProcedure
    .input(WorksUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneWorks = await ctx.prisma.works.upsert(input);
      return upsertOneWorks;
    }),

}) 
