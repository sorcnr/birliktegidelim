import { z } from "zod";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { BoolFilterObjectSchema } from "./BoolFilter.schema";
import { DriverListRelationFilterObjectSchema } from "./DriverListRelationFilter.schema";
import { WorkListRelationFilterObjectSchema } from "./WorkListRelationFilter.schema";
import { ExpenseListRelationFilterObjectSchema } from "./ExpenseListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CarWhereInputObjectSchema),
        z.lazy(() => CarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CarWhereInputObjectSchema),
        z.lazy(() => CarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    brand: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    model: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    year: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    color: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    image: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    available: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    drivers: z.lazy(() => DriverListRelationFilterObjectSchema).optional(),
    works: z.lazy(() => WorkListRelationFilterObjectSchema).optional(),
    Expense: z.lazy(() => ExpenseListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const CarWhereInputObjectSchema = Schema;
