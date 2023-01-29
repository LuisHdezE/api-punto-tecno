import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("ptotecno", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
