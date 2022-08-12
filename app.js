const express = require("express");
const authRoutes = require("./routes/auth");
const analyticsRoutes = require("./routes/analytics");
const categoryRoutes = require("./routes/category");
const orderRoutes = require("./routes/order");
const positionRoutes = require("./routes/position");
// создаю экземпляр фреймворка
const app = express();

// добавляем плагин спомощью use в app
app.use("/api/auth", authRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/position", positionRoutes);

// сщздаю роуты, подключаю
const authRoutes = require("./routes/auth");

// экспортируем наружу app
module.exports = app;
