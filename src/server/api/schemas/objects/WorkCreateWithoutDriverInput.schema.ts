import { z } from "zod";
import { CarCreateNestedOneWithoutWorksInputObjectSchema } from "./CarCreateNestedOneWithoutWorksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkCreateWithoutDriverInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    location: z.string(),
    kmInit: z.number(),
    kmLast: z.number(),
    distance: z.number(),
    cost: z.number(),
    car: z.lazy(() => CarCreateNestedOneWithoutWorksInputObjectSchema),
  })
  .strict();

export const WorkCreateWithoutDriverInputObjectSchema = Schema;
