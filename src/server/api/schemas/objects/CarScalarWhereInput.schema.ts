import { z } from "zod";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { BoolFilterObjectSchema } from "./BoolFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CarScalarWhereInputObjectSchema),
        z.lazy(() => CarScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CarScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CarScalarWhereInputObjectSchema),
        z.lazy(() => CarScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const CarScalarWhereInputObjectSchema = Schema;
