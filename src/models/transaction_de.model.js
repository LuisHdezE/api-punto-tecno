import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Transacd = sequelize.define("transacd", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  date: { type: DataTypes.DATE },
  transac_id: { type: DataTypes.INTEGER },
  code: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  cost: { type: DataTypes.FLOAT },
  price: { type: DataTypes.FLOAT },
  amount: { type: DataTypes.FLOAT },
});
