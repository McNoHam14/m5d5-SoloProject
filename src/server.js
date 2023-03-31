import Express from "express";
import cors from "cors";
import listEndpoints from "express-list-endpoints";
import { pgConnect } from "./db.js";

const server = Express();
const port = process.env.PORT;

// Middlewares
server.use(cors());
server.use(Express.json());

// Endpoints

// Error Handlers

await pgConnect();

server.listen(port, () => {
  console.table(listEndpoints(server));
  console.log(`Server is running on port ${port}`);
});
