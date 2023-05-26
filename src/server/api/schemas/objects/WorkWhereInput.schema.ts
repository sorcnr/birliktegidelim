import { z } from "zod";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { FloatFilterObjectSchema } from "./FloatFilter.schema";
import { CarRelationFilterObjectSchema } from "./CarRelationFilter.schema";
import { CarWhereInputObjectSchema } from "./CarWhereInput.schema";
import { DriverRelationFilterObjectSchema } from "./DriverRelationFilter.schema";
import { DriverWhereInputObjectSchema } from "./DriverWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => WorkWhereInputObjectSchema),
        z.lazy(() => WorkWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => WorkWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => WorkWhereInputObjectSchema),
        z.lazy(() => WorkWhereInputObjectSchema).array(),
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
    startDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    endDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    location: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    kmInit: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    kmLast: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    distance: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    cost: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
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

export const WorkWhereInputObjectSchema = Schema;
