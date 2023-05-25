import { z } from "zod";
import { WorksWhereUniqueInputObjectSchema } from "./objects/WorksWhereUniqueInput.schema";

export const WorksDeleteOneSchema = z.object({
  where: WorksWhereUniqueInputObjectSchema,
});
