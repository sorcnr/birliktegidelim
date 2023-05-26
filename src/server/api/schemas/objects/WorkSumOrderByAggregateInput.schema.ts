import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkSumOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    carId: z.lazy(() => SortOrderSchema).optional(),
    driverId: z.lazy(() => SortOrderSchema).optional(),
    kmInit: z.lazy(() => SortOrderSchema).optional(),
    kmLast: z.lazy(() => SortOrderSchema).optional(),
    distance: z.lazy(() => SortOrderSchema).optional(),
    cost: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const WorkSumOrderByAggregateInputObjectSchema = Schema;
