import { z } from "zod";
import { CarCreateWithoutWorksInputObjectSchema } from "./CarCreateWithoutWorksInput.schema";
import { CarUncheckedCreateWithoutWorksInputObjectSchema } from "./CarUncheckedCreateWithoutWorksInput.schema";
import { CarCreateOrConnectWithoutWorksInputObjectSchema } from "./CarCreateOrConnectWithoutWorksInput.schema";
import { CarUpsertWithoutWorksInputObjectSchema } from "./CarUpsertWithoutWorksInput.schema";
import { CarWhereUniqueInputObjectSchema } from "./CarWhereUniqueInput.schema";
import { CarUpdateWithoutWorksInputObjectSchema } from "./CarUpdateWithoutWorksInput.schema";
import { CarUncheckedUpdateWithoutWorksInputObjectSchema } from "./CarUncheckedUpdateWithoutWorksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarUpdateOneRequiredWithoutWorksNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CarCreateWithoutWorksInputObjectSchema),
        z.lazy(() => CarUncheckedCreateWithoutWorksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => CarCreateOrConnectWithoutWorksInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => CarUpsertWithoutWorksInputObjectSchema).optional(),
    connect: z.lazy(() => CarWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => CarUpdateWithoutWorksInputObjectSchema),
        z.lazy(() => CarUncheckedUpdateWithoutWorksInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const CarUpdateOneRequiredWithoutWorksNestedInputObjectSchema = Schema;
