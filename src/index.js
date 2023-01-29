import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  try {
    await sequelize.authenticate();

    console.log("Se estableció la conexion con la base de datos");
    app.listen(4000);
    console.log("Server is listening on port 4000");
  } catch (error) {
    console.log("Error: " + error);
  }
}

main();
