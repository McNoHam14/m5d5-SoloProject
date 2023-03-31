import express from "express";
import ExperiencesModel from "./model.js";

const experiencesRouter = express.Router();

experiencesRouter.post("/", async (req, res, next) => {
  try {
    const { experienceId } = await ExperiencesModel.create(req.body);
    res.status(201).send({ experienceId });
  } catch (error) {
    next(error);
  }
});

experiencesRouter.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

experiencesRouter.get("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

experiencesRouter.put("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

experiencesRouter.delete("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default experiencesRouter;
