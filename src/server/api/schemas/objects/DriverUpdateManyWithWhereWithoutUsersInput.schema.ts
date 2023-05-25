import { z } from "zod";
import { DriverScalarWhereInputObjectSchema } from "./DriverScalarWhereInput.schema";
import { DriverUpdateManyMutationInputObjectSchema } from "./DriverUpdateManyMutationInput.schema";
import { DriverUncheckedUpdateManyWithoutDriversInputObjectSchema } from "./DriverUncheckedUpdateManyWithoutDriversInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverUpdateManyWithWhereWithoutUsersInput> = z
  .object({
    where: z.lazy(() => DriverScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => DriverUpdateManyMutationInputObjectSchema),
      z.lazy(() => DriverUncheckedUpdateManyWithoutDriversInputObjectSchema),
    ]),
  })
  .strict();

export const DriverUpdateManyWithWhereWithoutUsersInputObjectSchema = Schema;
