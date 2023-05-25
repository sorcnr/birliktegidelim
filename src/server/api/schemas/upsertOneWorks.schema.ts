import { z } from "zod";
import { WorksWhereUniqueInputObjectSchema } from "./objects/WorksWhereUniqueInput.schema";
import { WorksCreateInputObjectSchema } from "./objects/WorksCreateInput.schema";
import { WorksUncheckedCreateInputObjectSchema } from "./objects/WorksUncheckedCreateInput.schema";
import { WorksUpdateInputObjectSchema } from "./objects/WorksUpdateInput.schema";
import { WorksUncheckedUpdateInputObjectSchema } from "./objects/WorksUncheckedUpdateInput.schema";

export const WorksUpsertSchema = z.object({
  where: WorksWhereUniqueInputObjectSchema,
  create: z.union([
    WorksCreateInputObjectSchema,
    WorksUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    WorksUpdateInputObjectSchema,
    WorksUncheckedUpdateInputObjectSchema,
  ]),
});
