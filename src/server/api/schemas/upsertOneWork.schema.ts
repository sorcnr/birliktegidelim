import { z } from "zod";
import { WorkWhereUniqueInputObjectSchema } from "./objects/WorkWhereUniqueInput.schema";
import { WorkCreateInputObjectSchema } from "./objects/WorkCreateInput.schema";
import { WorkUncheckedCreateInputObjectSchema } from "./objects/WorkUncheckedCreateInput.schema";
import { WorkUpdateInputObjectSchema } from "./objects/WorkUpdateInput.schema";
import { WorkUncheckedUpdateInputObjectSchema } from "./objects/WorkUncheckedUpdateInput.schema";

export const WorkUpsertSchema = z.object({
  where: WorkWhereUniqueInputObjectSchema,
  create: z.union([
    WorkCreateInputObjectSchema,
    WorkUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    WorkUpdateInputObjectSchema,
    WorkUncheckedUpdateInputObjectSchema,
  ]),
});
