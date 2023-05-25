import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkUncheckedCreateWithoutDriverInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.coerce.date().optional(),
    carId: z.number(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    location: z.string(),
    distance: z.number(),
    cost: z.number(),
  })
  .strict();

export const WorkUncheckedCreateWithoutDriverInputObjectSchema = Schema;
