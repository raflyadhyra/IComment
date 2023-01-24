import express from "express";
import DataController from "../controller/DataController.js";

const router = express.Router();

router.post("/data", DataController.store);
router.get("/data", DataController.index);

export default router;
