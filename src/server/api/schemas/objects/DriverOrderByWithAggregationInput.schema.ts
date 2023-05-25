import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { DriverCountOrderByAggregateInputObjectSchema } from "./DriverCountOrderByAggregateInput.schema";
import { DriverAvgOrderByAggregateInputObjectSchema } from "./DriverAvgOrderByAggregateInput.schema";
import { DriverMaxOrderByAggregateInputObjectSchema } from "./DriverMaxOrderByAggregateInput.schema";
import { DriverMinOrderByAggregateInputObjectSchema } from "./DriverMinOrderByAggregateInput.schema";
import { DriverSumOrderByAggregateInputObjectSchema } from "./DriverSumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    age: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => DriverCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => DriverAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => DriverMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => DriverMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => DriverSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const DriverOrderByWithAggregationInputObjectSchema = Schema;
