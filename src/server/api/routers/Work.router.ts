import { t, publicProcedure } from "./helpers/createRouter";
import { WorkAggregateSchema } from "../schemas/aggregateWork.schema";
import { WorkCreateOneSchema } from "../schemas/createOneWork.schema";
import { WorkDeleteManySchema } from "../schemas/deleteManyWork.schema";
import { WorkDeleteOneSchema } from "../schemas/deleteOneWork.schema";
import { WorkFindFirstSchema } from "../schemas/findFirstWork.schema";
import { WorkFindManySchema } from "../schemas/findManyWork.schema";
import { WorkFindUniqueSchema } from "../schemas/findUniqueWork.schema";
import { WorkGroupBySchema } from "../schemas/groupByWork.schema";
import { WorkUpdateManySchema } from "../schemas/updateManyWork.schema";
import { WorkUpdateOneSchema } from "../schemas/updateOneWork.schema";
import { WorkUpsertSchema } from "../schemas/upsertOneWork.schema";

export const worksRouter = t.createTRPCRouter({
  aggregateWork: publicProcedure
    .input(WorkAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateWork = await ctx.prisma.work.aggregate(input);
      return aggregateWork;
    }),
  createOneWork: publicProcedure
    .input(WorkCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneWork = await ctx.prisma.work.create(input);
      return createOneWork;
    }),
  deleteManyWork: publicProcedure
    .input(WorkDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyWork = await ctx.prisma.work.deleteMany(input);
      return deleteManyWork;
    }),
  deleteOneWork: publicProcedure
    .input(WorkDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneWork = await ctx.prisma.work.delete(input);
      return deleteOneWork;
    }),
  findFirstWork: publicProcedure
    .input(WorkFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstWork = await ctx.prisma.work.findFirst(input);
      return findFirstWork;
    }),
  findFirstWorkOrThrow: publicProcedure
    .input(WorkFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstWorkOrThrow = await ctx.prisma.work.findFirstOrThrow(input);
      return findFirstWorkOrThrow;
    }),
  findManyWork: publicProcedure
    .input(WorkFindManySchema).query(async ({ ctx, input }) => {
      const findManyWork = await ctx.prisma.work.findMany(input);
      return findManyWork;
    }),
  findUniqueWork: publicProcedure
    .input(WorkFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueWork = await ctx.prisma.work.findUnique(input);
      return findUniqueWork;
    }),
  findUniqueWorkOrThrow: publicProcedure
    .input(WorkFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueWorkOrThrow = await ctx.prisma.work.findUniqueOrThrow(input);
      return findUniqueWorkOrThrow;
    }),
  groupByWork: publicProcedure
    .input(WorkGroupBySchema).query(async ({ ctx, input }) => {
      const groupByWork = await ctx.prisma.work.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByWork;
    }),
  updateManyWork: publicProcedure
    .input(WorkUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyWork = await ctx.prisma.work.updateMany(input);
      return updateManyWork;
    }),
  updateOneWork: publicProcedure
    .input(WorkUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneWork = await ctx.prisma.work.update(input);
      return updateOneWork;
    }),
  upsertOneWork: publicProcedure
    .input(WorkUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneWork = await ctx.prisma.work.upsert(input);
      return upsertOneWork;
    }),

}) 
