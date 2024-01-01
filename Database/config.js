import { Sequelize } from "sequelize";


export const sequelize= new Sequelize("todo", "postgres", "admin", {
    host:"localhost",
    port:5432,
    dialect:"postgres",
    logging: false,
})

const connectDB= async()=>
{
    try{
        await sequelize.authenticate();
        console.log("Connection has been established successfully");
    }
    catch(err)
    {
        console.log("Trouble connecting to the database  "+err);
    }
}

export default connectDB;