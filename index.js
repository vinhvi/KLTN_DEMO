import express from "express";
import cookieParser from "cookie-parser";
import producRotes from "./routes/product.js";
import authRotes from "./routes/auth.js";
const port = 8521;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/products", producRotes);
app.use("/api/auth", authRotes);

app.listen(port, () => {
  console.log("server is ready in port " + port + "!!!");
});
