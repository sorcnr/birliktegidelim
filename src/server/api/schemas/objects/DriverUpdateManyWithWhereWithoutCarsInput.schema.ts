import { z } from "zod";
import { DriverScalarWhereInputObjectSchema } from "./DriverScalarWhereInput.schema";
import { DriverUpdateManyMutationInputObjectSchema } from "./DriverUpdateManyMutationInput.schema";
import { DriverUncheckedUpdateManyWithoutDriversInputObjectSchema } from "./DriverUncheckedUpdateManyWithoutDriversInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverUpdateManyWithWhereWithoutCarsInput> = z
  .object({
    where: z.lazy(() => DriverScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => DriverUpdateManyMutationInputObjectSchema),
      z.lazy(() => DriverUncheckedUpdateManyWithoutDriversInputObjectSchema),
    ]),
  })
  .strict();

export const DriverUpdateManyWithWhereWithoutCarsInputObjectSchema = Schema;
