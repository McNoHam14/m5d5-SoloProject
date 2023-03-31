import Express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import { pgConnect } from "./db.js";
import usersRouter from "./users/index.js";
import experiencesRouter from "./experiences/index.js";
import postsRouter from "./posts/index.js";

const server = Express();
const port = process.env.PORT;

// Middlewares
server.use(cors());
server.use(Express.json());

// Endpoints
server.use("/users", usersRouter);
server.use("/", experiencesRouter);
server.use("/", postsRouter);

// Error Handlers

await pgConnect();

server.listen(port, () => {
  console.table(listEndpoints(server));
  console.log(`Server is running on port ${port}`);
});
