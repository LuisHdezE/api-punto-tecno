import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Item = sequelize.define("items", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  customer_id: { type: DataTypes.INTEGER },
  category_id: { type: DataTypes.INTEGER },
  model_id: { type: DataTypes.INTEGER },
  imei: { type: DataTypes.STRING },
  diagnostic: { type: DataTypes.TEXT },
  image: { type: DataTypes.STRING },
  entry_date: { type: DataTypes.DATE },
  cost: { type: DataTypes.FLOAT },
  utility: { type: DataTypes.FLOAT },
  state: { type: DataTypes.STRING },
  observations: { type: DataTypes.TEXT },
  departure_date: { type: DataTypes.DATE },
});
