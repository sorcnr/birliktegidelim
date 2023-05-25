import { z } from "zod";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { FloatFilterObjectSchema } from "./FloatFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => WorkScalarWhereInputObjectSchema),
        z.lazy(() => WorkScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => WorkScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => WorkScalarWhereInputObjectSchema),
        z.lazy(() => WorkScalarWhereInputObjectSchema).array(),
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
    distance: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    cost: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
  })
  .strict();

export const WorkScalarWhereInputObjectSchema = Schema;
