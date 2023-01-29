import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Vendor = sequelize.define("vendors", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  name: { type: DataTypes.STRING, unique: true },
  rut: { type: DataTypes.STRING },
});
