import { z } from "zod";
import { WorkUpdateInputObjectSchema } from "./objects/WorkUpdateInput.schema";
import { WorkUncheckedUpdateInputObjectSchema } from "./objects/WorkUncheckedUpdateInput.schema";
import { WorkWhereUniqueInputObjectSchema } from "./objects/WorkWhereUniqueInput.schema";

export const WorkUpdateOneSchema = z.object({
  data: z.union([
    WorkUpdateInputObjectSchema,
    WorkUncheckedUpdateInputObjectSchema,
  ]),
  where: WorkWhereUniqueInputObjectSchema,
});
