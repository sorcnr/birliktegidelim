import { z } from "zod";
import { DriverWhereUniqueInputObjectSchema } from "./DriverWhereUniqueInput.schema";
import { DriverUpdateWithoutCarsInputObjectSchema } from "./DriverUpdateWithoutCarsInput.schema";
import { DriverUncheckedUpdateWithoutCarsInputObjectSchema } from "./DriverUncheckedUpdateWithoutCarsInput.schema";
import { DriverCreateWithoutCarsInputObjectSchema } from "./DriverCreateWithoutCarsInput.schema";
import { DriverUncheckedCreateWithoutCarsInputObjectSchema } from "./DriverUncheckedCreateWithoutCarsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverUpsertWithWhereUniqueWithoutCarsInput> = z
  .object({
    where: z.lazy(() => DriverWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => DriverUpdateWithoutCarsInputObjectSchema),
      z.lazy(() => DriverUncheckedUpdateWithoutCarsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DriverCreateWithoutCarsInputObjectSchema),
      z.lazy(() => DriverUncheckedCreateWithoutCarsInputObjectSchema),
    ]),
  })
  .strict();

export const DriverUpsertWithWhereUniqueWithoutCarsInputObjectSchema = Schema;
