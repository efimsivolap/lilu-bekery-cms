// подключаю express
const express = require("express");
// подключаю контроллеры
const controller = require("../controllers/auth");

// создаю локальный роутер
const router = express.Router();

// localhost:5000/api/auth/login
router.post("/login", controller.login);
// localhost:5000/api/auth/register
router.post("/register", controller.register);

// экспортирую роутер наружу
module.exports = router;
