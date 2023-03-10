import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Source = sequelize.define("sources", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  description: { type: DataTypes.STRING, unique: true },
});
