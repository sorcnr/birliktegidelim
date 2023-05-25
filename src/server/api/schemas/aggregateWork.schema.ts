import { z } from "zod";
import { WorkOrderByWithRelationInputObjectSchema } from "./objects/WorkOrderByWithRelationInput.schema";
import { WorkWhereInputObjectSchema } from "./objects/WorkWhereInput.schema";
import { WorkWhereUniqueInputObjectSchema } from "./objects/WorkWhereUniqueInput.schema";
import { WorkCountAggregateInputObjectSchema } from "./objects/WorkCountAggregateInput.schema";
import { WorkMinAggregateInputObjectSchema } from "./objects/WorkMinAggregateInput.schema";
import { WorkMaxAggregateInputObjectSchema } from "./objects/WorkMaxAggregateInput.schema";
import { WorkAvgAggregateInputObjectSchema } from "./objects/WorkAvgAggregateInput.schema";
import { WorkSumAggregateInputObjectSchema } from "./objects/WorkSumAggregateInput.schema";

export const WorkAggregateSchema = z.object({
  orderBy: z
    .union([
      WorkOrderByWithRelationInputObjectSchema,
      WorkOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: WorkWhereInputObjectSchema.optional(),
  cursor: WorkWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), WorkCountAggregateInputObjectSchema])
    .optional(),
  _min: WorkMinAggregateInputObjectSchema.optional(),
  _max: WorkMaxAggregateInputObjectSchema.optional(),
  _avg: WorkAvgAggregateInputObjectSchema.optional(),
  _sum: WorkSumAggregateInputObjectSchema.optional(),
});
