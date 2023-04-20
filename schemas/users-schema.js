import mongoose from "mongoose";
const usersSchema = new mongoose.Schema(
 {
   username: { type: String, unique: true, required: true },
   password: { type: String, required: true },
   createdAt: { type: Date, default: Date.now },
   isAdmin: { type: Boolean, default: false },
   userType: {
     type: String,
     default: "USER",
     enum: ["ADMIN", "USER", "BLOGGER"],
   },
 },
 { collection: "users" }
);
export default usersSchema;

