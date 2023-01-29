import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Transach = sequelize.define("transach", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  date: { type: DataTypes.DATE },
  concept_id: { type: DataTypes.INTEGER },
  vendor_id: { type: DataTypes.INTEGER },
  description: { type: DataTypes.TEXT },
  pos: { type: DataTypes.FLOAT },
  cash: { type: DataTypes.FLOAT },
});
