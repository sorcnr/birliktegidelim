import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { WorksCountOrderByAggregateInputObjectSchema } from "./WorksCountOrderByAggregateInput.schema";
import { WorksMaxOrderByAggregateInputObjectSchema } from "./WorksMaxOrderByAggregateInput.schema";
import { WorksMinOrderByAggregateInputObjectSchema } from "./WorksMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorksOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    carID: z.lazy(() => SortOrderSchema).optional(),
    driverID: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => WorksCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => WorksMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => WorksMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const WorksOrderByWithAggregationInputObjectSchema = Schema;
