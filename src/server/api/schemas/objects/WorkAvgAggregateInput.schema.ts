import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    carId: z.literal(true).optional(),
    driverId: z.literal(true).optional(),
    kmInit: z.literal(true).optional(),
    kmLast: z.literal(true).optional(),
    distance: z.literal(true).optional(),
    cost: z.literal(true).optional(),
  })
  .strict();

export const WorkAvgAggregateInputObjectSchema = Schema;
