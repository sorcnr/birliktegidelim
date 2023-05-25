import { z } from "zod";
import { DriverWhereInputObjectSchema } from "./DriverWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DriverRelationFilter> = z
  .object({
    is: z.lazy(() => DriverWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => DriverWhereInputObjectSchema).optional(),
  })
  .strict();

export const DriverRelationFilterObjectSchema = Schema;
