import { z } from "zod";
import { WorkWhereInputObjectSchema } from "./WorkWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkListRelationFilter> = z
  .object({
    every: z.lazy(() => WorkWhereInputObjectSchema).optional(),
    some: z.lazy(() => WorkWhereInputObjectSchema).optional(),
    none: z.lazy(() => WorkWhereInputObjectSchema).optional(),
  })
  .strict();

export const WorkListRelationFilterObjectSchema = Schema;
