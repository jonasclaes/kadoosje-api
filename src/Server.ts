import http from "http";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import express from "express";

import "express-async-errors";

import BaseRouter from "./routes";

const app = express();

/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Show routes called in console during development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Security
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

app.use(cors());

// Add APIs
app.use("/api", BaseRouter);

const server = http.createServer(app);

/************************************************************************************
 *                              Export Server
 ***********************************************************************************/

export default server;
