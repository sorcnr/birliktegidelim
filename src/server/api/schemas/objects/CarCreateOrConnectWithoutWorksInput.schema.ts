import { z } from "zod";
import { CarWhereUniqueInputObjectSchema } from "./CarWhereUniqueInput.schema";
import { CarCreateWithoutWorksInputObjectSchema } from "./CarCreateWithoutWorksInput.schema";
import { CarUncheckedCreateWithoutWorksInputObjectSchema } from "./CarUncheckedCreateWithoutWorksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarCreateOrConnectWithoutWorksInput> = z
  .object({
    where: z.lazy(() => CarWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CarCreateWithoutWorksInputObjectSchema),
      z.lazy(() => CarUncheckedCreateWithoutWorksInputObjectSchema),
    ]),
  })
  .strict();

export const CarCreateOrConnectWithoutWorksInputObjectSchema = Schema;
