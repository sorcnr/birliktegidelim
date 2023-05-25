import { z } from "zod";
import { CarUpdateWithoutWorksInputObjectSchema } from "./CarUpdateWithoutWorksInput.schema";
import { CarUncheckedUpdateWithoutWorksInputObjectSchema } from "./CarUncheckedUpdateWithoutWorksInput.schema";
import { CarCreateWithoutWorksInputObjectSchema } from "./CarCreateWithoutWorksInput.schema";
import { CarUncheckedCreateWithoutWorksInputObjectSchema } from "./CarUncheckedCreateWithoutWorksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarUpsertWithoutWorksInput> = z
  .object({
    update: z.union([
      z.lazy(() => CarUpdateWithoutWorksInputObjectSchema),
      z.lazy(() => CarUncheckedUpdateWithoutWorksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CarCreateWithoutWorksInputObjectSchema),
      z.lazy(() => CarUncheckedCreateWithoutWorksInputObjectSchema),
    ]),
  })
  .strict();

export const CarUpsertWithoutWorksInputObjectSchema = Schema;
