import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: { type: String, default: "USER", enum: ["ADMIN", "USER", "BLOGGER"] },
  },
  { collection: "users" }
);
const userRegisterModel = mongoose.model("users", userSchema);
export default userRegisterModel;
