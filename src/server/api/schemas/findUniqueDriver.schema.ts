import { z } from "zod";
import { DriverWhereUniqueInputObjectSchema } from "./objects/DriverWhereUniqueInput.schema";

export const DriverFindUniqueSchema = z.object({
  where: DriverWhereUniqueInputObjectSchema,
});
