import { z } from "zod";
import { DriverCreateNestedOneWithoutWorksInputObjectSchema } from "./DriverCreateNestedOneWithoutWorksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkCreateWithoutCarInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date(),
    location: z.string(),
    distance: z.number(),
    cost: z.number(),
    driver: z.lazy(() => DriverCreateNestedOneWithoutWorksInputObjectSchema),
  })
  .strict();

export const WorkCreateWithoutCarInputObjectSchema = Schema;
