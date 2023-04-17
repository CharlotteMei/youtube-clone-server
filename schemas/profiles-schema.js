import mongoose from "mongoose";
const profilesSchema = mongoose.Schema({
    userName: String,
    bio: String,
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    email: String,
}, {collection:"profiles"})
export default profilesSchema;