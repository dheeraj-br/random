import express from "express";
import { router as userRouter } from "../domains/root/users/route.js";
import { router as postRouter } from "../domains/root/posts/route.js";

export const router = express.Router();

router.use("/user", userRouter);
router.use("/post", postRouter);
