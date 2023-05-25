import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { ExpenseCountOrderByAggregateInputObjectSchema } from "./ExpenseCountOrderByAggregateInput.schema";
import { ExpenseAvgOrderByAggregateInputObjectSchema } from "./ExpenseAvgOrderByAggregateInput.schema";
import { ExpenseMaxOrderByAggregateInputObjectSchema } from "./ExpenseMaxOrderByAggregateInput.schema";
import { ExpenseMinOrderByAggregateInputObjectSchema } from "./ExpenseMinOrderByAggregateInput.schema";
import { ExpenseSumOrderByAggregateInputObjectSchema } from "./ExpenseSumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExpenseOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    carId: z.lazy(() => SortOrderSchema).optional(),
    driverId: z.lazy(() => SortOrderSchema).optional(),
    cost: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ExpenseCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => ExpenseAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => ExpenseMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ExpenseMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => ExpenseSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ExpenseOrderByWithAggregationInputObjectSchema = Schema;
