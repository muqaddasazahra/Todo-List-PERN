import { DataTypes } from "sequelize";
import { sequelize } from "../Database/config.js";

const Todo=sequelize.define("Todo",{
   description:
   {
    type: DataTypes.STRING,
    allowNull:false
   }
});

export default Todo;