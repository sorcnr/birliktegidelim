import { z } from "zod";
import { WorksOrderByWithRelationInputObjectSchema } from "./objects/WorksOrderByWithRelationInput.schema";
import { WorksWhereInputObjectSchema } from "./objects/WorksWhereInput.schema";
import { WorksWhereUniqueInputObjectSchema } from "./objects/WorksWhereUniqueInput.schema";
import { WorksScalarFieldEnumSchema } from "./enums/WorksScalarFieldEnum.schema";

export const WorksFindFirstSchema = z.object({
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
  distinct: z.array(WorksScalarFieldEnumSchema).optional(),
});
