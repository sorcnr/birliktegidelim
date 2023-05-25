import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    age: z.literal(true).optional(),
  })
  .strict();

export const DriverAvgAggregateInputObjectSchema = Schema;
