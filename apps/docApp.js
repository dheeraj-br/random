import express from "express";
import { router } from "../routes/docRoute.js";
import { globalErrorHandler, pageNotFoundHandler } from "../errorHandler.js";

export const doc = express();
doc.set("view engine", "ejs");
doc.set("views", "./views/ejs");
doc.use("/", router);
doc.all("*", pageNotFoundHandler);
doc.use(globalErrorHandler);
