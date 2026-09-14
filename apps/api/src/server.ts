// Created Backend Files

// First API

import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "quotepilot-api",
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`QuotePilot API running on http://localhost:${PORT}`);
});