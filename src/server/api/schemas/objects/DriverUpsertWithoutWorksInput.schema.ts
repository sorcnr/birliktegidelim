import { z } from "zod";
import { DriverUpdateWithoutWorksInputObjectSchema } from "./DriverUpdateWithoutWorksInput.schema";
import { DriverUncheckedUpdateWithoutWorksInputObjectSchema } from "./DriverUncheckedUpdateWithoutWorksInput.schema";
import { DriverCreateWithoutWorksInputObjectSchema } from "./DriverCreateWithoutWorksInput.schema";
import { DriverUncheckedCreateWithoutWorksInputObjectSchema } from "./DriverUncheckedCreateWithoutWorksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverUpsertWithoutWorksInput> = z
  .object({
    update: z.union([
      z.lazy(() => DriverUpdateWithoutWorksInputObjectSchema),
      z.lazy(() => DriverUncheckedUpdateWithoutWorksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DriverCreateWithoutWorksInputObjectSchema),
      z.lazy(() => DriverUncheckedCreateWithoutWorksInputObjectSchema),
    ]),
  })
  .strict();

export const DriverUpsertWithoutWorksInputObjectSchema = Schema;
