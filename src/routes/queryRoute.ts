import express from "express";
import { askGPT } from "../controllers/queryGPT";

const router = express.Router();

router.post("/", askGPT);

export default router;
