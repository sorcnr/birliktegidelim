import { z } from "zod";

export const WorksScalarFieldEnumSchema = z.enum([
  "id",
  "createdAt",
  "updatedAt",
  "carID",
  "driverID",
]);
