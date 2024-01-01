
import express from "express";
import TodoController from "../Controller/TodoController.js";

const TodoRouter=express.Router();

TodoRouter.post("/create",TodoController.createTodo);

export default TodoRouter;