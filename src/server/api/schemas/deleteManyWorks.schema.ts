import { z } from "zod";
import { WorksWhereInputObjectSchema } from "./objects/WorksWhereInput.schema";

export const WorksDeleteManySchema = z.object({
  where: WorksWhereInputObjectSchema.optional(),
});
