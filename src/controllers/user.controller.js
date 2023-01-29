import { User } from "../models/user.model.js";

export const getUser = (req, res) => {
  res.send("Listado de usuarios");
};

export const createUser = (req, res) => {
  res.send("Creating User");
};
