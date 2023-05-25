import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    brand: z.literal(true).optional(),
    model: z.literal(true).optional(),
    year: z.literal(true).optional(),
    color: z.literal(true).optional(),
    image: z.literal(true).optional(),
    available: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const CarCountAggregateInputObjectSchema = Schema;
