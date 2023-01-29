import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Group = sequelize.define("group", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  name: { type: DataTypes.STRING, unique: true },
});
