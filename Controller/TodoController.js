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
    },

    updateTodo: async (req,res)=>
    {
    const {description}=req.body;
    const todo= await Todo.findByPk(req.params.id);
    try 
    {
        await todo.update(
            {
                description: description,
            }
        );
        res.status(200).send("Todo updated successfully");
    }
    catch(err)
    {
        res.status(400).send("Todo couldn't be updated. Please try again later!"+err);
    }
    },

    deleteTodo: async(req,res)=>
    {
        const todo= await Todo.findByPk(req.params.id);
        try 
    {
        await todo.destroy();
        res.status(200).send("Todo deleted successfully");
    }
    catch(err)
    {
        res.status(400).send("Todo couldn't be deleted. Please try again later!"+err);
    }
    },

    getAllTodos: async (req,res)=>
    {  
        try
        {
            const todos=await Todo.findAll();
            res.status(200).send(todos);
        }
        catch(err)
        {
            res.status(400).send("Couldn't get all todos. Please try again later!"+err);
        }

    }
    

}

export default TodoController;