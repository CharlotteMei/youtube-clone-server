import mongoose from "mongoose";
const videoSchema = new mongoose.Schema(
    {
        videoID: { type: String, required: true },
        comments: [
            {
                userName: String,
                comment: String
            }
        ]
    },
    { collection: "video" }
);

const videoModel = mongoose.model("video", videoSchema)
export default videoModel