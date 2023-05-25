import { z } from "zod";
import { WorkWhereInputObjectSchema } from "./objects/WorkWhereInput.schema";
import { WorkOrderByWithAggregationInputObjectSchema } from "./objects/WorkOrderByWithAggregationInput.schema";
import { WorkScalarWhereWithAggregatesInputObjectSchema } from "./objects/WorkScalarWhereWithAggregatesInput.schema";
import { WorkScalarFieldEnumSchema } from "./enums/WorkScalarFieldEnum.schema";

export const WorkGroupBySchema = z.object({
  where: WorkWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      WorkOrderByWithAggregationInputObjectSchema,
      WorkOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: WorkScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(WorkScalarFieldEnumSchema),
});
