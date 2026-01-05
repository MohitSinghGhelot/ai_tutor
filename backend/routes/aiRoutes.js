import express from "express";
import { askGemini } from "../services/geminiService.js";

const router = express.Router();

router.post("/ask", async (req, res) => {
  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: "Question is required" });
  }

  const answer = await askGemini(question);

  res.json({ answer });
});

export default router;
