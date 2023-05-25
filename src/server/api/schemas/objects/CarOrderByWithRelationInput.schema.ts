import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { DriverOrderByRelationAggregateInputObjectSchema } from "./DriverOrderByRelationAggregateInput.schema";
import { WorkOrderByRelationAggregateInputObjectSchema } from "./WorkOrderByRelationAggregateInput.schema";
import { ExpenseOrderByRelationAggregateInputObjectSchema } from "./ExpenseOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    brand: z.lazy(() => SortOrderSchema).optional(),
    model: z.lazy(() => SortOrderSchema).optional(),
    year: z.lazy(() => SortOrderSchema).optional(),
    color: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    available: z.lazy(() => SortOrderSchema).optional(),
    drivers: z
      .lazy(() => DriverOrderByRelationAggregateInputObjectSchema)
      .optional(),
    works: z
      .lazy(() => WorkOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Expense: z
      .lazy(() => ExpenseOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const CarOrderByWithRelationInputObjectSchema = Schema;
