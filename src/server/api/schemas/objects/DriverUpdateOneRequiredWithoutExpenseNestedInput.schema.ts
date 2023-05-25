import { z } from "zod";
import { DriverCreateWithoutExpenseInputObjectSchema } from "./DriverCreateWithoutExpenseInput.schema";
import { DriverUncheckedCreateWithoutExpenseInputObjectSchema } from "./DriverUncheckedCreateWithoutExpenseInput.schema";
import { DriverCreateOrConnectWithoutExpenseInputObjectSchema } from "./DriverCreateOrConnectWithoutExpenseInput.schema";
import { DriverUpsertWithoutExpenseInputObjectSchema } from "./DriverUpsertWithoutExpenseInput.schema";
import { DriverWhereUniqueInputObjectSchema } from "./DriverWhereUniqueInput.schema";
import { DriverUpdateWithoutExpenseInputObjectSchema } from "./DriverUpdateWithoutExpenseInput.schema";
import { DriverUncheckedUpdateWithoutExpenseInputObjectSchema } from "./DriverUncheckedUpdateWithoutExpenseInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverUpdateOneRequiredWithoutExpenseNestedInput> =
  z
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
      upsert: z
        .lazy(() => DriverUpsertWithoutExpenseInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DriverWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DriverUpdateWithoutExpenseInputObjectSchema),
          z.lazy(() => DriverUncheckedUpdateWithoutExpenseInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const DriverUpdateOneRequiredWithoutExpenseNestedInputObjectSchema =
  Schema;
