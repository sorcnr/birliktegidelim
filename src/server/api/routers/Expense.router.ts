import { t, publicProcedure } from "./helpers/createRouter";
import { ExpenseAggregateSchema } from "../schemas/aggregateExpense.schema";
import { ExpenseCreateOneSchema } from "../schemas/createOneExpense.schema";
import { ExpenseDeleteManySchema } from "../schemas/deleteManyExpense.schema";
import { ExpenseDeleteOneSchema } from "../schemas/deleteOneExpense.schema";
import { ExpenseFindFirstSchema } from "../schemas/findFirstExpense.schema";
import { ExpenseFindManySchema } from "../schemas/findManyExpense.schema";
import { ExpenseFindUniqueSchema } from "../schemas/findUniqueExpense.schema";
import { ExpenseGroupBySchema } from "../schemas/groupByExpense.schema";
import { ExpenseUpdateManySchema } from "../schemas/updateManyExpense.schema";
import { ExpenseUpdateOneSchema } from "../schemas/updateOneExpense.schema";
import { ExpenseUpsertSchema } from "../schemas/upsertOneExpense.schema";

export const expensesRouter = t.router({
  aggregateExpense: publicProcedure
    .input(ExpenseAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateExpense = await ctx.prisma.expense.aggregate(input);
      return aggregateExpense;
    }),
  createOneExpense: publicProcedure
    .input(ExpenseCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneExpense = await ctx.prisma.expense.create(input);
      return createOneExpense;
    }),
  deleteManyExpense: publicProcedure
    .input(ExpenseDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyExpense = await ctx.prisma.expense.deleteMany(input);
      return deleteManyExpense;
    }),
  deleteOneExpense: publicProcedure
    .input(ExpenseDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneExpense = await ctx.prisma.expense.delete(input);
      return deleteOneExpense;
    }),
  findFirstExpense: publicProcedure
    .input(ExpenseFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstExpense = await ctx.prisma.expense.findFirst(input);
      return findFirstExpense;
    }),
  findFirstExpenseOrThrow: publicProcedure
    .input(ExpenseFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstExpenseOrThrow = await ctx.prisma.expense.findFirstOrThrow(input);
      return findFirstExpenseOrThrow;
    }),
  findManyExpense: publicProcedure
    .input(ExpenseFindManySchema).query(async ({ ctx, input }) => {
      const findManyExpense = await ctx.prisma.expense.findMany(input);
      return findManyExpense;
    }),
  findUniqueExpense: publicProcedure
    .input(ExpenseFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueExpense = await ctx.prisma.expense.findUnique(input);
      return findUniqueExpense;
    }),
  findUniqueExpenseOrThrow: publicProcedure
    .input(ExpenseFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueExpenseOrThrow = await ctx.prisma.expense.findUniqueOrThrow(input);
      return findUniqueExpenseOrThrow;
    }),
  groupByExpense: publicProcedure
    .input(ExpenseGroupBySchema).query(async ({ ctx, input }) => {
      const groupByExpense = await ctx.prisma.expense.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByExpense;
    }),
  updateManyExpense: publicProcedure
    .input(ExpenseUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyExpense = await ctx.prisma.expense.updateMany(input);
      return updateManyExpense;
    }),
  updateOneExpense: publicProcedure
    .input(ExpenseUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneExpense = await ctx.prisma.expense.update(input);
      return updateOneExpense;
    }),
  upsertOneExpense: publicProcedure
    .input(ExpenseUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneExpense = await ctx.prisma.expense.upsert(input);
      return upsertOneExpense;
    }),

}) 
