import { z } from "zod";
import { CarWhereInputObjectSchema } from "./CarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CarListRelationFilter> = z
  .object({
    every: z.lazy(() => CarWhereInputObjectSchema).optional(),
    some: z.lazy(() => CarWhereInputObjectSchema).optional(),
    none: z.lazy(() => CarWhereInputObjectSchema).optional(),
  })
  .strict();

export const CarListRelationFilterObjectSchema = Schema;
