import { z } from "zod";
import { DriverWhereInputObjectSchema } from "./DriverWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverListRelationFilter> = z
  .object({
    every: z.lazy(() => DriverWhereInputObjectSchema).optional(),
    some: z.lazy(() => DriverWhereInputObjectSchema).optional(),
    none: z.lazy(() => DriverWhereInputObjectSchema).optional(),
  })
  .strict();

export const DriverListRelationFilterObjectSchema = Schema;
