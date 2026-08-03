import express from "express";
import { generateImage } from "../controllers/imageController.js";
import {getTotalCredit} from  "../controllers/imageController.js"
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect ,  generateImage);

router.get("/credit" , protect , getTotalCredit);

export default router;