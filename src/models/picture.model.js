import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Picture = sequelize.define("images", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  name: { type: DataTypes.STRING, unique: true },
  model_id: { type: DataTypes.INTEGER },
  description: { type: DataTypes.TEXT },
});
