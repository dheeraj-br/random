import express from "express";
import { router } from "../routes/apiRoute.js";
import { globalErrorHandler, pageNotFoundHandler } from "../errorHandler.js";

export const api = express();
api.set("view engine", "hbs");
api.set("views", "./views/hbs");
api.use("/", router);
api.all("*", pageNotFoundHandler);
api.use(globalErrorHandler);
