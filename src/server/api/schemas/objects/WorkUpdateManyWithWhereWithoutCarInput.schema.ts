import { z } from "zod";
import { WorkScalarWhereInputObjectSchema } from "./WorkScalarWhereInput.schema";
import { WorkUpdateManyMutationInputObjectSchema } from "./WorkUpdateManyMutationInput.schema";
import { WorkUncheckedUpdateManyWithoutWorksInputObjectSchema } from "./WorkUncheckedUpdateManyWithoutWorksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkUpdateManyWithWhereWithoutCarInput> = z
  .object({
    where: z.lazy(() => WorkScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => WorkUpdateManyMutationInputObjectSchema),
      z.lazy(() => WorkUncheckedUpdateManyWithoutWorksInputObjectSchema),
    ]),
  })
  .strict();

export const WorkUpdateManyWithWhereWithoutCarInputObjectSchema = Schema;
