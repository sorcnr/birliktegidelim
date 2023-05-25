import { z } from "zod";
import { CarWhereUniqueInputObjectSchema } from "./CarWhereUniqueInput.schema";
import { CarCreateWithoutExpenseInputObjectSchema } from "./CarCreateWithoutExpenseInput.schema";
import { CarUncheckedCreateWithoutExpenseInputObjectSchema } from "./CarUncheckedCreateWithoutExpenseInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarCreateOrConnectWithoutExpenseInput> = z
  .object({
    where: z.lazy(() => CarWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CarCreateWithoutExpenseInputObjectSchema),
      z.lazy(() => CarUncheckedCreateWithoutExpenseInputObjectSchema),
    ]),
  })
  .strict();

export const CarCreateOrConnectWithoutExpenseInputObjectSchema = Schema;
