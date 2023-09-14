import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import UserRouter from "./router/user.router";
import CategoryRouter from "./router/category.router";
import SubCategoryRouter from "./router/subCategory.router";
import ProductRouter from "./router/product.router";
import CartRouter from "./router/cart.router";
import OrderRouter from "./router/order.router";
import AdminRouter from "./router/admin.router";

import cors from "cors";

var app = express();

const PORT = process.env.PORT || 8001;

app.use(express.json());
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.static(__dirname));
app.listen(PORT, () => {
  console.log("Your server running on http://localhost:" + PORT);
});

mongoose
  .connect("mongodb://127.0.0.1:27017/" + process.env.DB_NAME)
  .then(() => console.log("Connected!"));

app.use("/admin", AdminRouter);
app.use("/user", UserRouter);
app.use("/category", CategoryRouter);
app.use("/subcategory", SubCategoryRouter);
app.use("/product", ProductRouter);
app.use("/cart", CartRouter);
app.use("/order", OrderRouter);
