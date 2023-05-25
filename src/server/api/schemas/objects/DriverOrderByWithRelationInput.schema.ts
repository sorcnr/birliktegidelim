import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { CarOrderByRelationAggregateInputObjectSchema } from "./CarOrderByRelationAggregateInput.schema";
import { WorkOrderByRelationAggregateInputObjectSchema } from "./WorkOrderByRelationAggregateInput.schema";
import { ExpenseOrderByRelationAggregateInputObjectSchema } from "./ExpenseOrderByRelationAggregateInput.schema";
import { UserOrderByRelationAggregateInputObjectSchema } from "./UserOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    age: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    cars: z.lazy(() => CarOrderByRelationAggregateInputObjectSchema).optional(),
    works: z
      .lazy(() => WorkOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Expense: z
      .lazy(() => ExpenseOrderByRelationAggregateInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => UserOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const DriverOrderByWithRelationInputObjectSchema = Schema;
