import { z } from "zod";
import { CarWhereInputObjectSchema } from "./CarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarRelationFilter> = z
  .object({
    is: z.lazy(() => CarWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => CarWhereInputObjectSchema).optional(),
  })
  .strict();

export const CarRelationFilterObjectSchema = Schema;
