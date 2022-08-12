const express = require("express");

// создаю экземпляр фреймворка
const app = express();

// добавляем плагин спомощью use в app
app.use("/api/auth", authRoutes);

// сщздаю роуты, подключаю
const authRoutes = require("./routes/auth");

// экспортируем наружу app
module.exports = app;
