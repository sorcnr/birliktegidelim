import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    year: z.literal(true).optional(),
  })
  .strict();

export const CarAvgAggregateInputObjectSchema = Schema;