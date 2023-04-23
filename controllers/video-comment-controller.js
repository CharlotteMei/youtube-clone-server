import * as dao from "./video-comment-dao.js"

let currentVideo = null;

const VideoCommentsController = (app) => {
    const getCommentsByVideoID = async (req, res, next) => {
        try {
            console.log("in get comments by video id")
            const videoID = req.params.videoID;
            const video = await dao.findByVideoID(videoID)
            console.log(videoID);
            console.log(video);
            return res.json(video);
        } catch (ex) {
            next(ex);
        }
    }

    const addVideoComment = async(req, res, next) => {
        try {
            console.log("in add comment")
            const newVideoComment = req.body;
            console.log("new video comment as: ", newVideoComment)

            const ret = await dao.createVideoComment(newVideoComment)
            console.log(ret);
            return res.json(ret);
        } catch (ex) {
            next(ex);
        }
    }

    app.get("/api/videos/:videoID/getcomments", getCommentsByVideoID);
    app.post("/api/videos/:videoID/addcomment", addVideoComment);

};

export default VideoCommentsController;