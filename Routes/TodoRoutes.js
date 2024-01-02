
import express from "express";
import TodoController from "../Controller/TodoController.js";

const TodoRouter=express.Router();

TodoRouter.post("/create",TodoController.createTodo);
TodoRouter.post("/update/:id",TodoController.updateTodo);
TodoRouter.delete("/delete/:id",TodoController.deleteTodo);
TodoRouter.get("/getTodos",TodoController.getAllTodos);


export default TodoRouter;