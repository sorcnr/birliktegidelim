import { z } from "zod";
import { WorksWhereUniqueInputObjectSchema } from "./objects/WorksWhereUniqueInput.schema";

export const WorksFindUniqueSchema = z.object({
  where: WorksWhereUniqueInputObjectSchema,
});
