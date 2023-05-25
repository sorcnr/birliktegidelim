import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorksWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => WorksWhereInputObjectSchema),
        z.lazy(() => WorksWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => WorksWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => WorksWhereInputObjectSchema),
        z.lazy(() => WorksWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    carID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    driverID: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const WorksWhereInputObjectSchema = Schema;
