// подключаю express
const express = require("express");

// создаю локальный роутер
const router = express.Router();

// localhost:5000/api/auth/login
router.get("/login", (req, res) => {
  res.status(200).json({
    login: true,
  });
});

// экспортирую роутер наружу
module.exports = router;
