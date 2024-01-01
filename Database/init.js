import Todo from "../Models/TodoModel.js";


const init= async()=>
{
    try {
        await Todo.sync(
            {
                alter:true,
                force:false
            }
        );
        console.log("Database synced");
    }

    catch(err)
    {
        console.log("Trouble synchronizing Todo Model")
    }
};

export default init;
