import { z } from "zod";
import { DriverWhereUniqueInputObjectSchema } from "./DriverWhereUniqueInput.schema";
import { DriverCreateWithoutWorksInputObjectSchema } from "./DriverCreateWithoutWorksInput.schema";
import { DriverUncheckedCreateWithoutWorksInputObjectSchema } from "./DriverUncheckedCreateWithoutWorksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverCreateOrConnectWithoutWorksInput> = z
  .object({
    where: z.lazy(() => DriverWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DriverCreateWithoutWorksInputObjectSchema),
      z.lazy(() => DriverUncheckedCreateWithoutWorksInputObjectSchema),
    ]),
  })
  .strict();

export const DriverCreateOrConnectWithoutWorksInputObjectSchema = Schema;
