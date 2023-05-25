import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorksOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    carID: z.lazy(() => SortOrderSchema).optional(),
    driverID: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const WorksOrderByWithRelationInputObjectSchema = Schema;
