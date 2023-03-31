import express from "express";
import createHttpError from "http-errors";
import UsersModel from "./model.js";
import ExperiencesModel from "../experiences/model.js";
import PostsModel from "../posts/model.js";

const usersRouter = express.Router();

usersRouter.post("/", async (req, res, next) => {
  try {
    const { userId } = await UsersModel.create(req.body);
    res.status(201).send({ userId });
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await UsersModel.findAll({
      attributes: ["firstName", "surname", "title", "userId"],
      include: [
        {
          model: ExperiencesModel,
          attributes: [`experienceId`, `role`, `company`, `area`],
        },
        { model: PostsModel, attributes: [`postId`, `text`] },
      ],
    });
    res.send(users);
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/:userId", async (req, res, next) => {
  try {
    const user = await UsersModel.findByPk(req.params.userId, {
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    if (user) {
      res.send(user);
    } else {
      next(createHttpError(404, `${req.params.userId} not found`));
    }
  } catch (error) {
    next(error);
  }
});

usersRouter.put("/:userId", async (req, res, next) => {
  try {
    const [numberOfUpdatedRows, updatedRecords] = await UsersModel.update(
      req.body,
      {
        where: { userId: req.params.userId },
        returning: true,
      }
    );
    if (numberOfUpdatedRows === 1) {
      res.send(updatedRecords[0]);
    } else {
      next(createHttpError(404, `${req.params.userId} not found`));
    }
  } catch (error) {
    next(error);
  }
});

usersRouter.delete("/:userId", async (req, res, next) => {
  try {
    const numberOfDeletedRows = await UsersModel.destroy({
      where: { userId: req.params.userId },
    });
    if (numberOfDeletedRows === 1) {
      res.status(204).send();
    } else {
      next(createHttpError(404, `${req.params.userId} not found`));
    }
  } catch (error) {
    next(error);
  }
});

export default usersRouter;
