import { z } from "zod";
import { CarCreateWithoutExpenseInputObjectSchema } from "./CarCreateWithoutExpenseInput.schema";
import { CarUncheckedCreateWithoutExpenseInputObjectSchema } from "./CarUncheckedCreateWithoutExpenseInput.schema";
import { CarCreateOrConnectWithoutExpenseInputObjectSchema } from "./CarCreateOrConnectWithoutExpenseInput.schema";
import { CarWhereUniqueInputObjectSchema } from "./CarWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarCreateNestedOneWithoutExpenseInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CarCreateWithoutExpenseInputObjectSchema),
        z.lazy(() => CarUncheckedCreateWithoutExpenseInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CarCreateOrConnectWithoutExpenseInputObjectSchema)
      .optional(),
    connect: z.lazy(() => CarWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const CarCreateNestedOneWithoutExpenseInputObjectSchema = Schema;
