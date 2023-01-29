import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Customer = sequelize.define("customer", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  telefono: { type: DataTypes.STRING, unique: true },
  nombre: { type: DataTypes.STRING, unique: true },
});
