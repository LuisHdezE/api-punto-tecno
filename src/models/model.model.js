import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Model = sequelize.define("models", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  name: { type: DataTypes.STRING, unique: true },
  trademark_id: { type: DataTypes.INTEGER },
  description: { type: DataTypes.STRING },
});
