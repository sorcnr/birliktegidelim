import { z } from "zod";
import { CarCreateNestedOneWithoutWorksInputObjectSchema } from "./CarCreateNestedOneWithoutWorksInput.schema";
import { DriverCreateNestedOneWithoutWorksInputObjectSchema } from "./DriverCreateNestedOneWithoutWorksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkCreateInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    location: z.string(),
    distance: z.number(),
    cost: z.number(),
    car: z.lazy(() => CarCreateNestedOneWithoutWorksInputObjectSchema),
    driver: z.lazy(() => DriverCreateNestedOneWithoutWorksInputObjectSchema),
  })
  .strict();

export const WorkCreateInputObjectSchema = Schema;
