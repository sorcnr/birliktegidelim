import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    name: z.literal(true).optional(),
    age: z.literal(true).optional(),
    image: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const DriverCountAggregateInputObjectSchema = Schema;
