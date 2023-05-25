import { z } from "zod";
import { WorksUpdateManyMutationInputObjectSchema } from "./objects/WorksUpdateManyMutationInput.schema";
import { WorksWhereInputObjectSchema } from "./objects/WorksWhereInput.schema";

export const WorksUpdateManySchema = z.object({
  data: WorksUpdateManyMutationInputObjectSchema,
  where: WorksWhereInputObjectSchema.optional(),
});
