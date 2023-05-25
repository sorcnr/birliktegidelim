import { z } from "zod";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { FloatFilterObjectSchema } from "./FloatFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { CarRelationFilterObjectSchema } from "./CarRelationFilter.schema";
import { CarWhereInputObjectSchema } from "./CarWhereInput.schema";
import { DriverRelationFilterObjectSchema } from "./DriverRelationFilter.schema";
import { DriverWhereInputObjectSchema } from "./DriverWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExpenseWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExpenseWhereInputObjectSchema),
        z.lazy(() => ExpenseWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExpenseWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExpenseWhereInputObjectSchema),
        z.lazy(() => ExpenseWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    carId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    driverId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    cost: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    car: z
      .union([
        z.lazy(() => CarRelationFilterObjectSchema),
        z.lazy(() => CarWhereInputObjectSchema),
      ])
      .optional(),
    driver: z
      .union([
        z.lazy(() => DriverRelationFilterObjectSchema),
        z.lazy(() => DriverWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ExpenseWhereInputObjectSchema = Schema;
