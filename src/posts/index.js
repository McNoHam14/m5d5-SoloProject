import express from "express";
import PostsModel from "./model.js";

const postsRouter = express.Router();

postsRouter.post("/", async (req, res, next) => {
  try {
    const { postId } = await PostsModel.create(req.body);
    res.status(201).send({ postId });
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
