import express from "express";
import postsModel from "./model.js";

const postsRouter = express.Router();

postsRouter.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

postsRouter.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

postsRouter.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

postsRouter.put("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

postsRouter.delete("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default postsRouter;
