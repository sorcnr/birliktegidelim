import { z } from "zod";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { CarListRelationFilterObjectSchema } from "./CarListRelationFilter.schema";
import { WorkListRelationFilterObjectSchema } from "./WorkListRelationFilter.schema";
import { ExpenseListRelationFilterObjectSchema } from "./ExpenseListRelationFilter.schema";
import { UserListRelationFilterObjectSchema } from "./UserListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DriverWhereInputObjectSchema),
        z.lazy(() => DriverWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DriverWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DriverWhereInputObjectSchema),
        z.lazy(() => DriverWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    age: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    image: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    cars: z.lazy(() => CarListRelationFilterObjectSchema).optional(),
    works: z.lazy(() => WorkListRelationFilterObjectSchema).optional(),
    Expense: z.lazy(() => ExpenseListRelationFilterObjectSchema).optional(),
    users: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const DriverWhereInputObjectSchema = Schema;
