import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Model = sequelize.define("model", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  descripcion: { type: DataTypes.STRING },
});
