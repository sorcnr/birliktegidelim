import { z } from "zod";
import { WorksWhereInputObjectSchema } from "./objects/WorksWhereInput.schema";
import { WorksOrderByWithAggregationInputObjectSchema } from "./objects/WorksOrderByWithAggregationInput.schema";
import { WorksScalarWhereWithAggregatesInputObjectSchema } from "./objects/WorksScalarWhereWithAggregatesInput.schema";
import { WorksScalarFieldEnumSchema } from "./enums/WorksScalarFieldEnum.schema";

export const WorksGroupBySchema = z.object({
  where: WorksWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      WorksOrderByWithAggregationInputObjectSchema,
      WorksOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: WorksScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(WorksScalarFieldEnumSchema),
});
