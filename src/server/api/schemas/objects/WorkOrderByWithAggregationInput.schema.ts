import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { WorkCountOrderByAggregateInputObjectSchema } from "./WorkCountOrderByAggregateInput.schema";
import { WorkAvgOrderByAggregateInputObjectSchema } from "./WorkAvgOrderByAggregateInput.schema";
import { WorkMaxOrderByAggregateInputObjectSchema } from "./WorkMaxOrderByAggregateInput.schema";
import { WorkMinOrderByAggregateInputObjectSchema } from "./WorkMinOrderByAggregateInput.schema";
import { WorkSumOrderByAggregateInputObjectSchema } from "./WorkSumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    carId: z.lazy(() => SortOrderSchema).optional(),
    driverId: z.lazy(() => SortOrderSchema).optional(),
    startDate: z.lazy(() => SortOrderSchema).optional(),
    endDate: z.lazy(() => SortOrderSchema).optional(),
    location: z.lazy(() => SortOrderSchema).optional(),
    kmInit: z.lazy(() => SortOrderSchema).optional(),
    kmLast: z.lazy(() => SortOrderSchema).optional(),
    distance: z.lazy(() => SortOrderSchema).optional(),
    cost: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => WorkCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => WorkAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => WorkMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => WorkMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => WorkSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const WorkOrderByWithAggregationInputObjectSchema = Schema;
