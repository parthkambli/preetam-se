// routes/fitnessScheduleRoutes.js

const express = require("express");
const router = express.Router();
const controller = require("../controllers/fitnessScheduleController");

router.post("/", controller.createSchedule);
router.get("/", controller.getSchedules);
router.delete("/:id", controller.deleteSchedule);

module.exports = router;