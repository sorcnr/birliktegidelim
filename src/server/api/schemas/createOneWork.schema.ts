import { z } from "zod";
import { WorkCreateInputObjectSchema } from "./objects/WorkCreateInput.schema";
import { WorkUncheckedCreateInputObjectSchema } from "./objects/WorkUncheckedCreateInput.schema";

export const WorkCreateOneSchema = z.object({
  data: z.union([
    WorkCreateInputObjectSchema,
    WorkUncheckedCreateInputObjectSchema,
  ]),
});
