import { z } from "zod";
import { DriverWhereUniqueInputObjectSchema } from "./DriverWhereUniqueInput.schema";
import { DriverCreateWithoutCarsInputObjectSchema } from "./DriverCreateWithoutCarsInput.schema";
import { DriverUncheckedCreateWithoutCarsInputObjectSchema } from "./DriverUncheckedCreateWithoutCarsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverCreateOrConnectWithoutCarsInput> = z
  .object({
    where: z.lazy(() => DriverWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DriverCreateWithoutCarsInputObjectSchema),
      z.lazy(() => DriverUncheckedCreateWithoutCarsInputObjectSchema),
    ]),
  })
  .strict();

export const DriverCreateOrConnectWithoutCarsInputObjectSchema = Schema;
