import { z } from "zod";
import { DriverCreateWithoutWorksInputObjectSchema } from "./DriverCreateWithoutWorksInput.schema";
import { DriverUncheckedCreateWithoutWorksInputObjectSchema } from "./DriverUncheckedCreateWithoutWorksInput.schema";
import { DriverCreateOrConnectWithoutWorksInputObjectSchema } from "./DriverCreateOrConnectWithoutWorksInput.schema";
import { DriverWhereUniqueInputObjectSchema } from "./DriverWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverCreateNestedOneWithoutWorksInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DriverCreateWithoutWorksInputObjectSchema),
        z.lazy(() => DriverUncheckedCreateWithoutWorksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => DriverCreateOrConnectWithoutWorksInputObjectSchema)
      .optional(),
    connect: z.lazy(() => DriverWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const DriverCreateNestedOneWithoutWorksInputObjectSchema = Schema;
