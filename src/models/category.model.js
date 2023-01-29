import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Category = sequelize.define("categories", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  description: { type: DataTypes.STRING, unique: true },
});
