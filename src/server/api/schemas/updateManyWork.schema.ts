import { z } from "zod";
import { WorkUpdateManyMutationInputObjectSchema } from "./objects/WorkUpdateManyMutationInput.schema";
import { WorkWhereInputObjectSchema } from "./objects/WorkWhereInput.schema";

export const WorkUpdateManySchema = z.object({
  data: WorkUpdateManyMutationInputObjectSchema,
  where: WorkWhereInputObjectSchema.optional(),
});
