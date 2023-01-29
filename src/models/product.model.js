import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Product = sequelize.define("products", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  code: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  group_id: { type: DataTypes.INTEGER },
  cost: { type: DataTypes.FLOAT },
  price: { type: DataTypes.FLOAT },
  stock: { type: DataTypes.INTEGER },
});
