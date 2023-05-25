import { z } from "zod";
import { CarWhereUniqueInputObjectSchema } from "./CarWhereUniqueInput.schema";
import { CarUpdateWithoutDriversInputObjectSchema } from "./CarUpdateWithoutDriversInput.schema";
import { CarUncheckedUpdateWithoutDriversInputObjectSchema } from "./CarUncheckedUpdateWithoutDriversInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarUpdateWithWhereUniqueWithoutDriversInput> = z
  .object({
    where: z.lazy(() => CarWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => CarUpdateWithoutDriversInputObjectSchema),
      z.lazy(() => CarUncheckedUpdateWithoutDriversInputObjectSchema),
    ]),
  })
  .strict();

export const CarUpdateWithWhereUniqueWithoutDriversInputObjectSchema = Schema;
