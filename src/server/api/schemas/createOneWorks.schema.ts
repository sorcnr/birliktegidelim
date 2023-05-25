import { z } from "zod";
import { WorksCreateInputObjectSchema } from "./objects/WorksCreateInput.schema";
import { WorksUncheckedCreateInputObjectSchema } from "./objects/WorksUncheckedCreateInput.schema";

export const WorksCreateOneSchema = z.object({
  data: z.union([
    WorksCreateInputObjectSchema,
    WorksUncheckedCreateInputObjectSchema,
  ]),
});
