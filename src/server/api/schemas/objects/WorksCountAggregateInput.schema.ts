import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorksCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    carID: z.literal(true).optional(),
    driverID: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const WorksCountAggregateInputObjectSchema = Schema;
