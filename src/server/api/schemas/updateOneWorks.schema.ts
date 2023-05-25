import { z } from "zod";
import { WorksUpdateInputObjectSchema } from "./objects/WorksUpdateInput.schema";
import { WorksUncheckedUpdateInputObjectSchema } from "./objects/WorksUncheckedUpdateInput.schema";
import { WorksWhereUniqueInputObjectSchema } from "./objects/WorksWhereUniqueInput.schema";

export const WorksUpdateOneSchema = z.object({
  data: z.union([
    WorksUpdateInputObjectSchema,
    WorksUncheckedUpdateInputObjectSchema,
  ]),
  where: WorksWhereUniqueInputObjectSchema,
});
