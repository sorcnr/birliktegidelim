import { z } from "zod";
import { CarCreateWithoutWorksInputObjectSchema } from "./CarCreateWithoutWorksInput.schema";
import { CarUncheckedCreateWithoutWorksInputObjectSchema } from "./CarUncheckedCreateWithoutWorksInput.schema";
import { CarCreateOrConnectWithoutWorksInputObjectSchema } from "./CarCreateOrConnectWithoutWorksInput.schema";
import { CarWhereUniqueInputObjectSchema } from "./CarWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarCreateNestedOneWithoutWorksInput> = z
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
    connect: z.lazy(() => CarWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const CarCreateNestedOneWithoutWorksInputObjectSchema = Schema;
