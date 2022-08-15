const express = require("express");
const mysql = require("mysql");
const passport = require("passport");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
const analyticsRoutes = require("./routes/analytics");
const categoryRoutes = require("./routes/category");
const orderRoutes = require("./routes/order");
const positionRoutes = require("./routes/position");
const keys = require("./config/keys");
const app = express();
const DB =
  "mongodb+srv://efim_sivolap:<password>@cluster0.t2z2jvw.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log("MongoDB connected."))
  .catch((error) => console.log(error));

app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("cors")());

app.use("/api/auth", authRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/position", positionRoutes);

module.exports = app;
