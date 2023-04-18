import mongoose from "mongoose";
import usersSchema from "../schemas/users-schema.js";
const usersModel = mongoose.model("users", usersSchema);
export default usersModel;