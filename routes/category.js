const express = require("express");
const controller = require("../controllers/category");
const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.delete("/:id", controller.remove);
router.post("/register", controller.register);
router.patch("/:id", controller.update);

// экспортирую роутер наружу
module.exports = router;
