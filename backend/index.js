import "./utils/instrument.js";
import * as Sentry from "@sentry/node";
import express, { application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/connectDb.js";
import { clerkWebHooks } from "./controllers/webHooks.js";

// initiaize express app
const app = express();

// db connection
await connectDb();

// middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("api working");
});
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post("/webhooks", clerkWebHooks);
const port = process.env.PORT || 5000;

Sentry.setupExpressErrorHandler(app);

//
app.listen(port, () => {
  console.log(`Server running on port ${port} 🔥`);
});
