import { z } from "zod";

export const ExpenseScalarFieldEnumSchema = z.enum([
  "id",
  "createdAt",
  "carId",
  "driverId",
  "cost",
  "description",
]);
