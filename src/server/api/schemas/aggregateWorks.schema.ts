import { z } from "zod";
import { WorksOrderByWithRelationInputObjectSchema } from "./objects/WorksOrderByWithRelationInput.schema";
import { WorksWhereInputObjectSchema } from "./objects/WorksWhereInput.schema";
import { WorksWhereUniqueInputObjectSchema } from "./objects/WorksWhereUniqueInput.schema";
import { WorksCountAggregateInputObjectSchema } from "./objects/WorksCountAggregateInput.schema";
import { WorksMinAggregateInputObjectSchema } from "./objects/WorksMinAggregateInput.schema";
import { WorksMaxAggregateInputObjectSchema } from "./objects/WorksMaxAggregateInput.schema";

export const WorksAggregateSchema = z.object({
  orderBy: z
    .union([
      WorksOrderByWithRelationInputObjectSchema,
      WorksOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: WorksWhereInputObjectSchema.optional(),
  cursor: WorksWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), WorksCountAggregateInputObjectSchema])
    .optional(),
  _min: WorksMinAggregateInputObjectSchema.optional(),
  _max: WorksMaxAggregateInputObjectSchema.optional(),
});
