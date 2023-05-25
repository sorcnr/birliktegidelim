import { z } from "zod";
import { WorkWhereUniqueInputObjectSchema } from "./objects/WorkWhereUniqueInput.schema";

export const WorkFindUniqueSchema = z.object({
  where: WorkWhereUniqueInputObjectSchema,
});
