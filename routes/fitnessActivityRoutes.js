const express = require("express");
const router = express.Router();
const fitnessActivityController = require("../controllers/fitnessActivityController");

router.post("/", fitnessActivityController.createActivity);
router.get("/", fitnessActivityController.getActivities);
router.get("/:id", fitnessActivityController.getActivityById);
router.put("/:id", fitnessActivityController.updateActivity);
router.delete("/:id", fitnessActivityController.deleteActivity);

module.exports = router;