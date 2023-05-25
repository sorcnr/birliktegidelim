import { z } from "zod";
import { CarScalarWhereInputObjectSchema } from "./CarScalarWhereInput.schema";
import { CarUpdateManyMutationInputObjectSchema } from "./CarUpdateManyMutationInput.schema";
import { CarUncheckedUpdateManyWithoutCarsInputObjectSchema } from "./CarUncheckedUpdateManyWithoutCarsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarUpdateManyWithWhereWithoutDriversInput> = z
  .object({
    where: z.lazy(() => CarScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => CarUpdateManyMutationInputObjectSchema),
      z.lazy(() => CarUncheckedUpdateManyWithoutCarsInputObjectSchema),
    ]),
  })
  .strict();

export const CarUpdateManyWithWhereWithoutDriversInputObjectSchema = Schema;
