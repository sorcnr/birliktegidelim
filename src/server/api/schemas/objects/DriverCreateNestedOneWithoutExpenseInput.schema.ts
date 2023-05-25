import { z } from "zod";
import { DriverCreateWithoutExpenseInputObjectSchema } from "./DriverCreateWithoutExpenseInput.schema";
import { DriverUncheckedCreateWithoutExpenseInputObjectSchema } from "./DriverUncheckedCreateWithoutExpenseInput.schema";
import { DriverCreateOrConnectWithoutExpenseInputObjectSchema } from "./DriverCreateOrConnectWithoutExpenseInput.schema";
import { DriverWhereUniqueInputObjectSchema } from "./DriverWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverCreateNestedOneWithoutExpenseInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DriverCreateWithoutExpenseInputObjectSchema),
        z.lazy(() => DriverUncheckedCreateWithoutExpenseInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => DriverCreateOrConnectWithoutExpenseInputObjectSchema)
      .optional(),
    connect: z.lazy(() => DriverWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const DriverCreateNestedOneWithoutExpenseInputObjectSchema = Schema;
