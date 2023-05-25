import { z } from "zod";

export const WorkScalarFieldEnumSchema = z.enum([
  "id",
  "createdAt",
  "carId",
  "driverId",
  "startDate",
  "endDate",
  "location",
  "distance",
  "cost",
]);
