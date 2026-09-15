// Created Backend Files

// First API with Health Check Endpoint

import express from "express";
import cors from "cors";
import "dotenv/config";
import { pool } from "./db/client.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", async (_req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      status: "ok",
      service: "quotepilot-api",
      database: "connected",
      time: result.rows[0].now,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "error",
      database: "disconnected",
    });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`QuotePilot API running on http://localhost:${PORT}`);
});