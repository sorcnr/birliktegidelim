import { z } from "zod";
import { WorkOrderByWithRelationInputObjectSchema } from "./objects/WorkOrderByWithRelationInput.schema";
import { WorkWhereInputObjectSchema } from "./objects/WorkWhereInput.schema";
import { WorkWhereUniqueInputObjectSchema } from "./objects/WorkWhereUniqueInput.schema";
import { WorkScalarFieldEnumSchema } from "./enums/WorkScalarFieldEnum.schema";

export const WorkFindManySchema = z.object({
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
  distinct: z.array(WorkScalarFieldEnumSchema).optional(),
});
