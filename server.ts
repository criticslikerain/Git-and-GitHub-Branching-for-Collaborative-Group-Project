import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AppDataSource } from "../src/_helper/db";
import userRoutes from "./users/user.controller";
import bookRoutes from "./books/book.controller";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/books", bookRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Connected to MySQL Database");
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch((err) => console.error("Error connecting to database", err));
