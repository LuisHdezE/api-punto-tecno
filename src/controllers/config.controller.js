import { Config } from "../models/config.model.js";

export const getConfig = (req, res) => {
  res.send("Listado de Config");
};

export const createConfig = (req, res) => {
  res.send("Creating Config");
};
