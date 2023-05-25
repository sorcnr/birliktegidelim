import { z } from "zod";
import { DriverCreateWithoutWorksInputObjectSchema } from "./DriverCreateWithoutWorksInput.schema";
import { DriverUncheckedCreateWithoutWorksInputObjectSchema } from "./DriverUncheckedCreateWithoutWorksInput.schema";
import { DriverCreateOrConnectWithoutWorksInputObjectSchema } from "./DriverCreateOrConnectWithoutWorksInput.schema";
import { DriverUpsertWithoutWorksInputObjectSchema } from "./DriverUpsertWithoutWorksInput.schema";
import { DriverWhereUniqueInputObjectSchema } from "./DriverWhereUniqueInput.schema";
import { DriverUpdateWithoutWorksInputObjectSchema } from "./DriverUpdateWithoutWorksInput.schema";
import { DriverUncheckedUpdateWithoutWorksInputObjectSchema } from "./DriverUncheckedUpdateWithoutWorksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverUpdateOneRequiredWithoutWorksNestedInput> =
  z
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
      upsert: z
        .lazy(() => DriverUpsertWithoutWorksInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DriverWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DriverUpdateWithoutWorksInputObjectSchema),
          z.lazy(() => DriverUncheckedUpdateWithoutWorksInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const DriverUpdateOneRequiredWithoutWorksNestedInputObjectSchema =
  Schema;
