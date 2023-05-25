import { z } from "zod";
import { DriverWhereUniqueInputObjectSchema } from "./DriverWhereUniqueInput.schema";
import { DriverUpdateWithoutCarsInputObjectSchema } from "./DriverUpdateWithoutCarsInput.schema";
import { DriverUncheckedUpdateWithoutCarsInputObjectSchema } from "./DriverUncheckedUpdateWithoutCarsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverUpdateWithWhereUniqueWithoutCarsInput> = z
  .object({
    where: z.lazy(() => DriverWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => DriverUpdateWithoutCarsInputObjectSchema),
      z.lazy(() => DriverUncheckedUpdateWithoutCarsInputObjectSchema),
    ]),
  })
  .strict();

export const DriverUpdateWithWhereUniqueWithoutCarsInputObjectSchema = Schema;
