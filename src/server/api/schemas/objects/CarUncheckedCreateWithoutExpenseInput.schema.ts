import { z } from "zod";
import { DriverUncheckedCreateNestedManyWithoutCarsInputObjectSchema } from "./DriverUncheckedCreateNestedManyWithoutCarsInput.schema";
import { WorkUncheckedCreateNestedManyWithoutCarInputObjectSchema } from "./WorkUncheckedCreateNestedManyWithoutCarInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarUncheckedCreateWithoutExpenseInput> = z
  .object({
    id: z.number().optional(),
    createdAt: z.coerce.date().optional(),
    brand: z.string(),
    model: z.string(),
    year: z.number(),
    color: z.string(),
    image: z.string(),
    available: z.boolean().optional(),
    drivers: z
      .lazy(() => DriverUncheckedCreateNestedManyWithoutCarsInputObjectSchema)
      .optional(),
    works: z
      .lazy(() => WorkUncheckedCreateNestedManyWithoutCarInputObjectSchema)
      .optional(),
  })
  .strict();

export const CarUncheckedCreateWithoutExpenseInputObjectSchema = Schema;
