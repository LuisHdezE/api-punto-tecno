import { Category } from "../models/category.model.js";

export const getCategories = (req, res) => {
  res.send("Listado de categorias");
};

export const createCategory = (req, res) => {
  res.send("Creating Category");
};
