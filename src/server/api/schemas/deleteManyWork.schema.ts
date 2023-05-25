import { z } from "zod";
import { WorkWhereInputObjectSchema } from "./objects/WorkWhereInput.schema";

export const WorkDeleteManySchema = z.object({
  where: WorkWhereInputObjectSchema.optional(),
});
