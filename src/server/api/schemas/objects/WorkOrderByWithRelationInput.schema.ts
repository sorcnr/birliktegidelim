import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { CarOrderByWithRelationInputObjectSchema } from "./CarOrderByWithRelationInput.schema";
import { DriverOrderByWithRelationInputObjectSchema } from "./DriverOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkOrderByWithRelationInput> = z
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
    car: z.lazy(() => CarOrderByWithRelationInputObjectSchema).optional(),
    driver: z.lazy(() => DriverOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const WorkOrderByWithRelationInputObjectSchema = Schema;
