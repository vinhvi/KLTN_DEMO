import exress from "express";
import { addProduct } from "../controller/productController.js";

const routes = exress.Router();

routes.get("/tests", addProduct);

export default routes;
