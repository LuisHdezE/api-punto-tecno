import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Concept = sequelize.define("concept", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  description: { type: DataTypes.STRING },
  operaciones: { type: DataTypes.INTEGER },
});
