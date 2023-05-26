import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    carId: z.literal(true).optional(),
    driverId: z.literal(true).optional(),
    startDate: z.literal(true).optional(),
    endDate: z.literal(true).optional(),
    location: z.literal(true).optional(),
    kmInit: z.literal(true).optional(),
    kmLast: z.literal(true).optional(),
    distance: z.literal(true).optional(),
    cost: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const WorkCountAggregateInputObjectSchema = Schema;
