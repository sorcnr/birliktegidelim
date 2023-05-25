import { z } from "zod";
import { DriverWhereUniqueInputObjectSchema } from "./DriverWhereUniqueInput.schema";
import { DriverCreateWithoutExpenseInputObjectSchema } from "./DriverCreateWithoutExpenseInput.schema";
import { DriverUncheckedCreateWithoutExpenseInputObjectSchema } from "./DriverUncheckedCreateWithoutExpenseInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverCreateOrConnectWithoutExpenseInput> = z
  .object({
    where: z.lazy(() => DriverWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DriverCreateWithoutExpenseInputObjectSchema),
      z.lazy(() => DriverUncheckedCreateWithoutExpenseInputObjectSchema),
    ]),
  })
  .strict();

export const DriverCreateOrConnectWithoutExpenseInputObjectSchema = Schema;
