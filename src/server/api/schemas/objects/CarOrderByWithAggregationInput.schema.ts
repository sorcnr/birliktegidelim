import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { CarCountOrderByAggregateInputObjectSchema } from "./CarCountOrderByAggregateInput.schema";
import { CarAvgOrderByAggregateInputObjectSchema } from "./CarAvgOrderByAggregateInput.schema";
import { CarMaxOrderByAggregateInputObjectSchema } from "./CarMaxOrderByAggregateInput.schema";
import { CarMinOrderByAggregateInputObjectSchema } from "./CarMinOrderByAggregateInput.schema";
import { CarSumOrderByAggregateInputObjectSchema } from "./CarSumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    brand: z.lazy(() => SortOrderSchema).optional(),
    model: z.lazy(() => SortOrderSchema).optional(),
    year: z.lazy(() => SortOrderSchema).optional(),
    color: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    available: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => CarCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => CarAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => CarMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CarMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => CarSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const CarOrderByWithAggregationInputObjectSchema = Schema;
