import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorksUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    carID: z.string(),
    driverID: z.string(),
  })
  .strict();

export const WorksUncheckedCreateInputObjectSchema = Schema;
