const express = require("express");
const controller = require("../controllers/position");
const router = express.Router();

router.get("/categoryId", controller.getByCategoryId);
router.post("/register", controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.remove);

// экспортирую роутер наружу
module.exports = router;
