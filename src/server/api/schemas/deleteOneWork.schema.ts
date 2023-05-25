import { z } from "zod";
import { WorkWhereUniqueInputObjectSchema } from "./objects/WorkWhereUniqueInput.schema";

export const WorkDeleteOneSchema = z.object({
  where: WorkWhereUniqueInputObjectSchema,
});
