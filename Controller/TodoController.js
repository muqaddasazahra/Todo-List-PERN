import Todo from "../Models/TodoModel.js"

const TodoController={
    createTodo: async (req,res)=>
    {
    const {description}=req.body;
    try{ await Todo.create({
        description:description,
     });
     res.status(200).send("Todo created successfully!")
    }
    catch(err)
    {
        res.status(400).send("couldn't create todo. Please try again later!");
    }
    }
}

export default TodoController;